const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('player_choices')
		.setDescription('View an active player\'s choices up to now.')
		.addUserOption(option =>
			option.setName('user')
				.setDescription('Player to view.')
				.setRequired(true)),
					
	async execute(interaction, players) {
		let user = interaction.options.getUser("user", true);

		let playerObj = players.get(user.id);
		if (!playerObj) {
			await interaction.reply({ content: 'This player hasn\'t started the story or has already completed it.', ephemeral: true });
			return;
		}

		// Construct Message
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle(`${user.tag}'s choices so far (in order)`)
			.setDescription(playerObj.choices.join("\n"));

		await interaction.reply({ embeds: [embed], ephemeral: true });
	},
	async canRun(interaction, players) {
		let guildMember = interaction.guild.members.resolve(interaction.user.id);
		let roles = guildMember.roles.cache;

		return roles.get("912056682572570704") !== null
	}
};