import axios from 'axios';
import config from '../config/env.js';

const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_VIDEO_DETAILS_URL = 'https://www.googleapis.com/youtube/v3/videos';

// const sixMonthsAgo = new Date();
// sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
// const publishedAfter = sixMonthsAgo.toISOString();

async function buscarVideosPorTermo(termo, maxResults = 5) {
  try {
    // Primeiro busca os vídeos por termo
    const searchResponse = await axios.get(YOUTUBE_API_URL, {
      params: {
        part: 'snippet',
        q: termo,
        type: 'video',
        maxResults,
        // publishedAfter,
        key: config.youtubeKey,
      },
    });

    const videoIds = searchResponse.data.items.map(item => item.id.videoId).join(',');

    // Depois busca os detalhes (view count, etc)
    const detailsResponse = await axios.get(YOUTUBE_VIDEO_DETAILS_URL, {
      params: {
        part: 'snippet,statistics',
        id: videoIds,
        key: config.youtubeKey,
      },
    });

    const videos = detailsResponse.data.items.map(video => ({
      id: video.id,
      titulo: video.snippet.title,
      canal: video.snippet.channelTitle,
      publicacao: video.snippet.publishedAt,
      visualizacoes: parseInt(video.statistics.viewCount, 10),
      link: `https://www.youtube.com/watch?v=${video.id}`,
    }));

    console.log('📦 Vídeos formatados:', videos); // ✅ Adiciona esse log aqui
    return videos
  } catch (error) {
    console.error('❌ Erro ao buscar vídeos no YouTube:', error.message);
    return [];
  }
}

export { buscarVideosPorTermo };
