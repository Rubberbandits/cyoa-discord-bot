const { EventEmitter } = require("stream");

class Quest {
	events = new EventEmitter;

	#name = "Quest";
	get name() {
		return this.#name;
	}

	// Active state
	#state = 0;
	get state() {
		return this.#state;
	}
	nextState() {
		this.events.emit("stateChanged", this.state, this.state + 1);

		this.#state += 1;
	}
	prevState() {
		let newState = this.state > 1 ? this.state - 1 : 0;
		this.events.emit("stateChanged", this.state, newState);

		this.#state = newState;
	}

	// Instance-unique data
	#data = {};
	get data() {
		return this.#data;
	}
	setVar(key, value) {
		// Emit
		this.events.emit("dataChanged", key, this.data[key], value);

		this.#data[key] = value;
	}
	getVar(key, def) {
		return this.data[key] || def;
	}
}

exports.Quest = Quest;