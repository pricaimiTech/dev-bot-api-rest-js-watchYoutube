import dotenv from 'dotenv';
dotenv.config();

export default {
  discordToken: process.env.DISCORD_BOT_TOKEN,
  youtubeKey: process.env.YOUTUBE_API_KEY,
  guildId: process.env.DISCORD_GUILD_ID,
  channels: {
    default: process.env.CANAL_DEFAULT_ID,
    dev: process.env.CANAL_DEV_ID,
    qa: process.env.CANAL_QA_ID,
    engenharia: process.env.CANAL_ENG_ID,
    nodejs: process.env.CANAL_NODEJS_ID,
    automacao: process.env.CANAL_AUTOMACAO_ID,
  }
};
