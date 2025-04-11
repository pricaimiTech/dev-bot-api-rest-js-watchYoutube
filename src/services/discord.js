import { client } from '../bot/discordClient.js';
import { config } from '../config/env.js';
import { classificarEngajamento } from '../utils/classificador.js';

const canalPorTermo = {
  'nodejs': config.channels.nodejs,
  'qa': config.channels.qa,
  'dev': config.channels.dev,
  'engenharia de software': config.channels.engenharia,
  'automação': config.channels.automacao,
};

export async function enviarAlertaDiscord(termo, video) {
  const canalId = canalPorTermo[termo.toLowerCase()] || config.channels.default;
  const canal = await client.channels.fetch(canalId);
  const { destaque, nivel } = classificarEngajamento(video.viewCount);

  const destaqueEmoji = destaque ? '🚨' : '📹';

  const mensagem = `${destaqueEmoji} **Trend detectada para "${termo}"**
**🎬 Título:** ${video.title}
**📺 Canal:** ${video.channelTitle}
**👁️ Visualizações:** ${video.viewCount}
**📌 Nível de engajamento:** ${nivel}
🔗 https://www.youtube.com/watch?v=${video.videoId}`;

  await canal.send(mensagem);
}
