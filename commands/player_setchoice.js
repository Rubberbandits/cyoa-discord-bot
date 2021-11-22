const { PlayerMadeChoice } = require("../handlers");
const { MainQuest } = require("../main_quest");
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('player_setchoice')
		.setDescription('Sets the player\'s current choice.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Player to set current choice.')
				.setRequired(true))
		.addStringOption(option =>
			option.setName('choice')
				.setDescription('The choice that the user should be sent to.')
				.setRequired(true)),
					
	async execute(interaction, players) {
		let user = interaction.get("user", true);
		let choice = interaction.get("choice", true);

		let playerObj = players.get(user.id);
		let questAction = MainQuest.actions[choice];

		if (!playerObj) {
			await interaction.reply({ content: 'This player hasn\'t started the story or has already completed it.', ephemeral: true });
			return;
		}

		if (!questAction) {
			await interaction.reply({ content: 'This is an invalid choice.', ephemeral: true });
			return;
		}

		await PlayerMadeChoice(playerObj, choice, interaction.guild);
		await interaction.reply({ content: 'Player has had their choice set.', ephemeral: true });
	},
	async canRun(interaction, players) {
		return true
	}
};