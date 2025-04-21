export function gerarRoteiro(video, termo, classificacao) {
  const { titulo, descricao, canal, publicacao, visualizacoes, likes, comentarios, link } = video;
  const { destaque, nivel } = classificacao;

  const destaqueEmoji = destaque ? '🚨' : '📹';

  return `${destaqueEmoji} **Trend detectada para "${termo}"**
      **🎬 Título:** ${titulo}
      **📝 Descrição:** ${descricao}
      **📺 Canal:** ${canal}
      **📅 Publicado em:** ${new Date(publicacao).toLocaleDateString('pt-BR')}
      **👁️ Visualizações:** ${visualizacoes}
      **👍 Likes:** ${likes}
      **💬 Comentários:** ${comentarios}
      **📌 Nível de engajamento:** ${nivel}
      🔗 ${link}`;
}
