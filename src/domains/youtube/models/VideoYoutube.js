// src/domains/youtube/models/VideoYoutube.js
import { classificarEngajamento } from '../utils/classificarEngajamento.js';

export default class VideoYoutube {
  constructor({ id, titulo, canal, publicacao, visualizacoes, link, destaque, nivel }) {
    this.id = id;
    this.titulo = titulo;
    this.canal = canal;
    this.publicacao = publicacao;
    this.visualizacoes = visualizacoes;
    this.link = link;
    this.destaque = destaque;
    this.nivelEngajamento = nivel;
  }

  static fromApi(item) {
    const visualizacoes = parseInt(item.statistics.viewCount, 10);
    const { destaque, nivel } = classificarEngajamento(visualizacoes);

    return new VideoYoutube({
      id: item.id,
      titulo: item.snippet.title,
      canal: item.snippet.channelTitle,
      publicacao: item.snippet.publishedAt,
      visualizacoes,
      link: `https://www.youtube.com/watch?v=${item.id}`,
      destaque,
      nivel,
    });
  }
}
