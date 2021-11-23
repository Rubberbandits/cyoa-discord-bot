require("dotenv").config();

const fs = require('fs');
const path = require('path');

// Require the necessary discord.js classes
const { 
	Client, 
	Intents, 
} = require('discord.js');

const { joinVoiceChannel, createAudioPlayer, createAudioResource, generateDependencyReport, AudioPlayerStatus, StreamType } = require('@discordjs/voice');

console.log(generateDependencyReport());

const resource = createAudioResource(fs.createReadStream(path.join(__dirname, './track.ogg'), {
	inputType: StreamType.OggOpus,
}));

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_VOICE_STATES ] });

// When the client is ready, run this code (only once)
client.once('ready', async () => {
	let guilds = await client.guilds.fetch();
	let first = guilds.entries().next();
	let guild = await first.value[1].fetch();

	let voiceChannel = await guild.channels.fetch(process.env.CHANNEL_ID);
	const connection = joinVoiceChannel({
		channelId: voiceChannel.id,
		guildId: voiceChannel.guild.id,
		adapterCreator: voiceChannel.guild.voiceAdapterCreator,
		selfDeaf: false
	});

	const player = createAudioPlayer();
	player.play(resource);

	// Subscribe the connection to the audio player (will play audio on the voice connection)
	const subscription = connection.subscribe(player);

	player.on(AudioPlayerStatus.Idle, () => {
		player.play(resource);
	});

	console.log("Bot ready!")
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);