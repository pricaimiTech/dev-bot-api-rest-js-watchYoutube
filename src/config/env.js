import dotenv from 'dotenv';
dotenv.config();

export default {
  discordToken: process.env.DISCORD_BOT_TOKEN,
  youtubeKey: process.env.YOUTUBE_API_KEY,
  guildId: process.env.DISCORD_GUILD_ID,
  channels: {
    default: process.env.DISCORD_CHANNEL_DEFAULT_ID,
    dev: process.env.DISCORD_CHANNEL_DEV_ID,
    qa: process.env.DISCORD_CHANNEL_QA_ID,
    engenharia: process.env.DISCORD_CHANNEL_ENG_ID,
    nodejs: process.env.DISCORD_CHANNEL_NODE_ID,
    automacao: process.env.DISCORD_CHANNEL_AUTO_ID,
  }
};
