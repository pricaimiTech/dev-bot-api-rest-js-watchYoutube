export function gerarRoteiro(videoInfo) {
    const { nome, descricao, canal, url, publicacao, visualizacoes } = videoInfo;
  
    return `
  📺 Título: ${nome}
  📣 Canal: ${canal}
  📅 Publicado em: ${new Date(publicacao).toLocaleDateString('pt-BR')}
  👁️ Visualizações: ${visualizacoes}
  🔗 Link: ${url}
  
  📝 Descrição:
  ${descricao || 'Sem descrição disponível.'}
    `.trim();
  }
  