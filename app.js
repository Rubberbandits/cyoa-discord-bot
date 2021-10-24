// Load config
require("dotenv").config();

// Load quest object
const { Quest } = require("./quest_class");

let quest_test = new Quest;
console.log(quest_test.name);