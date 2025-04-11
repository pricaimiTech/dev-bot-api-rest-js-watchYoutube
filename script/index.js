import { client } from '../src/bot/discordClient.js';
import { buscarVideosPorTermo } from '../src/services/youtube.js';
import { enviarAlertaDiscord } from '../src/services/discord.js';

const termosBusca = ['nodejs', 'qa', 'dev', 'engenharia de software', 'automação'];

client.once('ready', async () => {
  console.log('🤖 Bot rodando e buscando trends no YouTube...');

  for (const termo of termosBusca) {
    const videos = await buscarVideosPorTermo(termo);
    for (const video of videos) {
      await enviarAlertaDiscord(termo, video);
    }
  }

  console.log('✅ Fim da execução. Encerrando bot...');
  process.exit(0);
});

client.login(process.env.DISCORD_BOT_TOKEN);
