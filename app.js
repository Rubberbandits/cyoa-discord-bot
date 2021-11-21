// Load config
require("dotenv").config();

// Require the necessary discord.js classes
const { 
	Client, 
	Intents, 
	MessageActionRow, 
	MessageButton, 
	MessageEmbed,
	MessageSelectMenu 
} = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

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

	await i.update(message);
}

function ConstructQuestAction(actionID)
{
	let action = MainQuest.actions[actionID];

	// Construct Message
	const embed = new MessageEmbed()
		.setColor('#0099ff')
		.setDescription(action.message || "No message.");

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
	if (!interaction.isMessageComponent()) return;

	let customID = interaction.customId;
	let handler = INTERACTION_HANDLERS[customID];
	if (handler !== undefined) {
		await handler(interaction);
	}

	let questAction = MainQuest.actions[customID];
	if (questAction) {
		let playerObj = ActivePlayers.get(interaction.user.id);

		if (!playerObj.canChoose(customID)) {
			interaction.deferUpdate();
			return;
		}

		playerObj.addChoice(customID);

		if (questAction.assignRole) {
			interaction.user.roles.add(questAction.assignRole);
		}

		if (questAction.interactionHandler) {
			await questAction.interactionHandler(customID, interaction);
		} else {
			await GenericQuestAction(customID, interaction);
		}
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);