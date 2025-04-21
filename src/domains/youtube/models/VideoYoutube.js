// src/domains/youtube/models/VideoYoutube.js
import { classificarEngajamento } from '../../../utils/classificarEngajamento.js';

export default class VideoYoutube {
  constructor({ id, titulo, canal, descricao, publicacao, visualizacoes, likes, comentarios, compartilhamento, link, destaque, nivel }) {
    this.id = id;
    this.titulo = titulo;
    this.descricao = descricao;
    this.canal = canal;
    this.publicacao = publicacao;
    this.likes = likes;
    this.comentarios = comentarios;
    this.visualizacoes = visualizacoes;
    this.comp = compartilhamento;
    this.link = link;
    this.destaque = destaque;
    this.nivelEngajamento = nivel;
  }

  static fromApi(item) {
    const likes = parseInt(item.statistics.likeCount, 10) || 0; // likeCount pode não estar disponível
    const comentarios = parseInt(item.statistics.commentCount, 10) || 0; // commentCount pode não estar disponível
    const visualizacoes = parseInt(item.statistics.viewCount, 10) || 0; // viewCount pode não estar disponível
    const compartilhamento = parseInt(item.statistics.shareCount, 10) || 0; // shareCount pode não estar disponível
    const { destaque, nivel } = classificarEngajamento(visualizacoes);

    return new VideoYoutube({
      id: item.id,
      titulo: item.snippet.title,
      desscricao: item.snippet.description,
      canal: item.snippet.channelTitle,
      nivel,
      likes,
      comentarios,
      visualizacoes,  
      compartilhamento,
      publicacao: item.snippet.publishedAt,
      link: `https://www.youtube.com/watch?v=${item.id}`,
      destaque,
    });
  }
}
