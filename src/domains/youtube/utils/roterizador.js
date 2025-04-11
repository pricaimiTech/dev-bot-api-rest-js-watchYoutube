export function gerarRoteiro(video, termo, classificacao) {
  const { titulo, canal, publicacao, visualizacoes, link } = video;
  const { destaque, nivel } = classificacao;

  const destaqueEmoji = destaque ? '🚨' : '📹';

  return `${destaqueEmoji} **Trend detectada para "${termo}"**
      **🎬 Título:** ${titulo}
      **📺 Canal:** ${canal}
      **📅 Publicado em:** ${new Date(publicacao).toLocaleDateString('pt-BR')}
      **👁️ Visualizações:** ${visualizacoes}
      **📌 Nível de engajamento:** ${nivel}
      🔗 ${link}`;
}
