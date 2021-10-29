const { MainQuest } = require("./main_quest");

class Player {
	constructor(GuildMember) {
		this.#user = GuildMember;
	}

	#user;
	get user() {
		return this.#user;
	}

	#choices = [];
	get choices() {
		return this.#choices;
	}
	addChoice(choiceID) {
		this.#choices.push(choiceID);
	}
	getCurrentChoiceID() {
		let currentAction = this.choices.length == 0 ? "entrypoint" : this.choices[this.choices.length - 1];
		return currentAction;
	}
	getCurrentChoice() {
		return MainQuest.actions[this.getCurrentChoiceID()];
	}
	getNextOptions() {
		return this.getCurrentChoice().choices;
	}
	canChoose(choiceID) {
		return this.getNextOptions().includes(choiceID);
	}
}

exports.Player = Player;