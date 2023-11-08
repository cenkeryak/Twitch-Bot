console.log("app started!\n");


import tmi from 'tmi.js'
import {BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME} from "./constants"

const options = {
	options: { debug: true },
	identity: {
		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels: [ CHANNEL_NAME ]
}

const client = new tmi.Client(options);

client.connect();

client.on('message', (channel, tags, message, self) => {
	// Ignore echoed messages.
	if(self) return;

	if(message.toLowerCase() === '!hello') {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, Welcome to the channel!`);
	}
});