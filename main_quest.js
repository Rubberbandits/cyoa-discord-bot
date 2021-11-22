const fs = require('fs').promises;

const BUTTON = 1;
const SELECT = 2;

const MainQuest = {
	title: "Quest title",
	description: "Quest description",
	entry_label: "START",
	entry_style: "DANGER",
	revokeRoles: [],
	actions: {
		entrypoint: {
			interactionType: BUTTON,
			message: "Entrypoint",
			choices: [
				"left",
				"right",
				"forward",
			]
		},

		left: {
			interactionType: BUTTON,
			label: "LEFT",
			style: "PRIMARY",
			message: "You went left.",
			choices: [
				"get_item"
			],
		},
		right: {
			interactionType: BUTTON,
			label: "RIGHT",
			style: "PRIMARY",
			message: "You went right.",
			choices: [
				"get_item"
			],
		},
		forward: {
			interactionType: BUTTON,
			label: "FORWARD",
			style: "PRIMARY",
			message: "You went forward.",
			choices: [
				"get_item",
				"dead_end"
			],
		},
		dead_end: {
			label: "NEXT",
			style: "PRIMARY",
			message: "This is a dead end.",
		},
		exit: {
			label: "Exit",
			style: "PRIMARY",
			interactionHandler: (actionID, i, playerObj) => {
				await fs.writeFile(`./users/${i.user.tag}.json`, JSON.stringify(playerObj.choices, null, 2), 'utf8');
				await i.update({content: "You've exited the game.", embeds: [], components: []});
			}
		},
		get_item: {
			interactionType: BUTTON,
			label: "Get Item",
			style: "PRIMARY",
			message: "You've got the item.",
			setChannel: "912090197196419112",
			choices: [
				"exit",
				"left",
				"forward",
				"dead_end"
			],
		}
	}
}

exports.MainQuest = MainQuest;