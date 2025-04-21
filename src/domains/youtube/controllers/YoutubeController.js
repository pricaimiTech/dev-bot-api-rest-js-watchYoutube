// src/domains/youtube/controllers/YoutubeController.js
import { buscarVideosPorTermo } from '../services/youtube.js';
import { enviarAlertaDiscord } from '../services/discord.js';
import saveReportDb from '../../../utils/saveReportDb.js';

class YoutubeController {
  static async getTopVideos(req, res) {
    try {
      const { termos } = req.body;

      if (!termos || !Array.isArray(termos)) {
        return res.status(400).json({ message: 'Formato de termos inválido' });
      }

      const resultados = {};

      for (const termo of termos) {
        const videos = await buscarVideosPorTermo(termo);

        resultados[termo] = videos;

        for (const video of videos) {
          await enviarAlertaDiscord(termo, video);
        }
      }

      const relatorioPorTermo = Object.entries(resultados).map(([termo, videos]) => ({
        termo,
        videos: videos.map(video => ({
          correlationID: video.id,
          titulo_video: video.titulo,
          descricao: video.descricao,
          canal: video.canal,
          publicacao: video.publicacao,
          nivelEngajamento: video.nivelEngajamento,
          metricas: {
            likes:video.likes,
            comentarios: video.comentarios,
            views:  video.visualizacoes,
            compartilhamentos: video.comp,
          },
          link: video.link
        }))
      }));

      try {
        await saveReportDb('Youtube', relatorioPorTermo);
      } catch (error) {
        throw new Error('Erro ao salvar relatório no banco de dados: ' + error.message);
      }

      res.status(200).json(resultados);
    } catch (err) {
      res.status(500).json({ message: 'Erro ao buscar vídeos', error: err.message });
    }
  }
}

export default YoutubeController;
