// Load config
require("dotenv").config();

// Require the necessary discord.js classes
const { 
	Client, 
	Collection, 
	Intents, 
	MessageActionRow, 
	MessageButton, 
	MessageEmbed,
	MessageSelectMenu 
} = require('discord.js');

const fs = require("fs");

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// Load player object
const { Player } = require("./player.js");
var ActivePlayers = new Map;

const BUTTON = 1;
const SELECT = 2;

/*
	Load Quests
*/

const { MainQuest } = require("./main_quest");

for (var choice in MainQuest.actions) {
	let choiceData = MainQuest.actions[choice];

	if (choiceData.choices && typeof choiceData.choices === "object" && choiceData.choices[0]) {
		for (var nextChoice of choiceData.choices) {
			if (!MainQuest.actions[nextChoice]) {
				console.log(`Missing action found: ${nextChoice}`)
			}
		}
	} else {
		console.log(`Missing choices key/isn't an array in choice: ${choice}`)
	}
}

/*
	Handlers/Helpers
*/

const { StateSetChannel, PlayerMadeChoice } = require("./handlers.js");

async function GenericQuestAction(actionID, i)
{
	const {embed, actions} = ConstructQuestAction(actionID);
	var message = {
		embeds: [embed],
		components: [],
		ephemeral: true
	}

	if (actions !== null && actions !== undefined) {
		message.components = [actions];
	}

	try {
		await i.update(message);
	} catch(err) {
		console.log(err);
	}
}

function ConstructQuestAction(actionID)
{
	let action = MainQuest.actions[actionID];

	// Construct Message
	const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setDescription(action.message || "No message.");

	if (action.image) {
		embed.setImage(action.image);
	}

	let actionComponents = [];
	if (action.interactionType === BUTTON) {
		action.choices.forEach(choice => {
			let choiceData = MainQuest.actions[choice];

			actionComponents.push(
				new MessageButton()
					.setCustomId(choice)
					.setLabel(choiceData.label)
					.setStyle(choiceData.style)
			);
		});
	}

	// Construct Interaction
	const row = new MessageActionRow()
		.addComponents(...actionComponents);

	return {embed: embed, actions: actionComponents.length > 0 ? row : null};
}

/*
	Interaction Handlers
*/

const INTERACTION_HANDLERS = {
	start: async i => {
		let client = i.user;
		let playerObj = ActivePlayers.get(client.id);
		let questAction = playerObj ? playerObj.getCurrentChoiceID() : "entrypoint";

		if (!playerObj) {
			playerObj = new Player(client);
			playerObj.addChoice(questAction);

			ActivePlayers.set(client.id, playerObj);
		} else if (playerObj.getCurrentChoiceID() == "exit") {
			return;
		}

		let memberObj = i.guild.members.resolve(client.id);
		if (memberObj.voice.channel) {
			await StateSetChannel(memberObj.voice);
		}

		// Construct quest option
		const {embed, actions} = ConstructQuestAction(questAction);
		var message = {
			embeds: [embed],
			components: null,
			ephemeral: true
		}

		if (actions !== null && actions !== undefined) {
			message.components = [actions];
		}

		await i.deferReply({ ephemeral: true });
		i.followUp(message);
	},
}

/*
	Event Listeners
*/

// When the client is ready, run this code (only once)
client.once('ready', async () => {
	let guilds = await client.guilds.fetch();
	let first = guilds.entries().next();
	let guild = await first.value[1].fetch();

	let gameChannel = await guild.channels.fetch(process.env.CHANNEL_ID);
	await gameChannel.bulkDelete(1);

	// Construct Message
	const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle(MainQuest.title)
		.setDescription(MainQuest.description);

	// Construct Interaction
	const row = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('start')
				.setLabel(MainQuest.entry_label)
				.setStyle(MainQuest.entry_style)
		);

	// Send initial message
	await gameChannel.send({embeds: [embed], components: [row]});

	console.log("Bot ready!")
});

// Register interaction event
client.on('interactionCreate', async interaction => {
	switch (interaction.type) {
		case "APPLICATION_COMMAND":
			const command = client.commands.get(interaction.commandName);
			if (!command) return;

			if (command.canRun && !await command.canRun(interaction, ActivePlayers)) {
				await interaction.reply({ content: 'You don\'t have the required permissions to run this command!', ephemeral: true });
			}
		
			try {
				await command.execute(interaction, ActivePlayers);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}

			break;
		case "MESSAGE_COMPONENT":
			let customID = interaction.customId;
			let handler = INTERACTION_HANDLERS[customID];
			if (handler !== undefined) {
				await handler(interaction);
			}

			let playerObj = ActivePlayers.get(interaction.user.id);
			let questAction = MainQuest.actions[customID];

			if (questAction) {
				if (!playerObj.canChoose(customID)) {
					questAction = playerObj.getCurrentChoice();
					customID = playerObj.getCurrentChoiceID();
				}
				
				await PlayerMadeChoice(playerObj, customID, interaction.guild);

				if (questAction.interactionHandler) {
					await questAction.interactionHandler(customID, interaction, playerObj);
				} else {
					await GenericQuestAction(customID, interaction);
				}
			}

			break;
		default: 
			console.log("Unhandled interaction");
	}

});

// Monitor Messages
client.on("messageCreate", async message => {
	if (message.channelId == "912057609064951878") {
		let playerObj = ActivePlayers.get(message.author.id);
		if (!playerObj) return;

		if (message.content.toLowerCase().includes("yhwh")) {
			await PlayerMadeChoice(playerObj, "correct_password", message.guild);
		} else {
			await PlayerMadeChoice(playerObj, "anything_else", message.guild);
		}
	} else if (
			message.channelId == "912057554123763723" && 
			message.attachments.first() !== undefined && 
			message.attachments.first().contentType.includes("image/")
		) {
		let playerObj = ActivePlayers.get(message.author.id);
		if (!playerObj) return;

		await PlayerMadeChoice(playerObj, "sefirot_eight", message.guild);
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);