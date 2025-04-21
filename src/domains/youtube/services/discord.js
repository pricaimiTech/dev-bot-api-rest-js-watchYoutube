import { client } from '../../../bot/discordClient.js';
import { classificarEngajamento } from '../../../utils/classificarEngajamento.js';
import { gerarRoteiro } from '../../../utils/roterizador.js';
import { canalMap } from '../../../config/canalMap.js';

function encontrarCanalPorTermo(termo) {
  const termoLower = termo.toLowerCase();

  for (const canal of canalMap) {
    if (canal.palavras.some(p => termoLower.includes(p))) {
      return canal.canalId;
    }
  }

  return null;
}

export async function enviarAlertaDiscord(termo, video) {
  const canalId = encontrarCanalPorTermo(termo);

  if (!canalId) {
    console.warn(`⚠️ Nenhum canal encontrado para o termo "${termo}"`);
    return;
  }

  const canal = await client.channels.fetch(canalId);
  const classificacao = classificarEngajamento(video.visualizacoes);
  const mensagem = gerarRoteiro(video, termo, classificacao);

  console.log(`📩 Enviando mensagem para o canal ${canalId}:`, mensagem);
  await canal.send(mensagem);
}
