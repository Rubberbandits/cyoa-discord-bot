const { MainQuest } = require("./main_quest");

async function StateSetChannel(voiceState, channelID)
{
	let nextChannel = channelID || process.env.VOICE_WAITING_ID;
	if (voiceState.channelId != nextChannel) {
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
            let revokeRoles = questAction.revokeRoles
            if (typeof questAction.revokeRoles !== "object" && typeof questAction.revokeRoles !== "string") {
                revokeRoles = MainQuest.revokeRoles;
            }
            
			guildMember.roles.remove(revokeRoles);
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