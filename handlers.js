const { MainQuest } = require("./main_quest");

async function StateSetChannel(voiceState, channelID)
{
	let nextChannel = channelID || process.env.VOICE_WAITING_ID;
	if (voiceState.channelID != nextChannel) {
		await voiceState.setMute(true);
		await voiceState.setChannel(nextChannel);
	}
}

async function PlayerMadeChoice(player, customID, guild)
{
	let questAction = MainQuest.actions[customID];

	if (questAction) {
		player.addChoice(customID);

		let guildMember = guild.members.resolve(player.user.id);

		if (questAction.revokeRoles) {
			guildMember.roles.remove(typeof questAction.revokeRoles === "object" ? questAction.revokeRoles : MainQuest.revokeRoles);
		}

		if (questAction.assignRole) {
			guildMember.roles.add(questAction.assignRole);
		}

		let voiceState = guildMember.voice;
		if (voiceState.channel) {
			await StateSetChannel(voiceState, questAction.setChannel);
		}
	}
}

exports.PlayerMadeChoice = PlayerMadeChoice;
exports.StateSetChannel = StateSetChannel;