// src/bot/discordClient.js

import { Client, GatewayIntentBits } from 'discord.js';
import config from '../config/env.js';

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

client.login(config.discordToken);

export { client };
