// src/domains/youtube/controllers/YoutubeController.js
import { buscarVideosPorTermo } from '../services/youtube.js';
import { enviarAlertaDiscord } from '../services/discord.js';

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

      res.status(200).json(resultados);
    } catch (err) {
      res.status(500).json({ message: 'Erro ao buscar vídeos', error: err.message });
    }
  }
}

export default YoutubeController;
