import { client } from '../bot/discordClient.js';
import config from '../config/env.js';
import { classificarEngajamento } from '../utils/classificador.js';

const canalPorTermo = {
  'nodejs': config.channels.nodejs,
  'qa': config.channels.qa,
  'dev': config.channels.dev,
  'engenharia de software': config.channels.engenharia,
  'automação de testes': config.channels.automacao,
};

export async function enviarAlertaDiscord(termo, video) {
  const canalId = canalPorTermo[termo.toLowerCase()] || config.channels.default;
  const canal = await client.channels.fetch(canalId);
  const { destaque, nivel } = classificarEngajamento(video.visualizacoes);

  const destaqueEmoji = destaque ? '🚨' : '📹';

  const mensagem = `${destaqueEmoji} **Trend detectada para "${termo}"**
**🎬 Título:** ${video.titulo}
**📺 Canal:** ${video.canal}
**👁️ Visualizações:** ${video.visualizacoes}
**📌 Nível de engajamento:** ${nivel}
🔗 ${video.link}`;
  console.log(`📩 Enviando mensagem para o canal ${canalId}:`, mensagem); // ✅ Adiciona esse log aqui
  await canal.send(mensagem);
}
