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
					
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
	async canRun(interaction) {
		return true
	}
};