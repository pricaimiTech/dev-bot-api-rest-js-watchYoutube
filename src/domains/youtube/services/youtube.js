// src/domains/youtube/services/youtube.js
import axios from 'axios';
import config from '../../../config/env.js';
import VideoYoutube from '../models/VideoYoutube.js';

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';
const VIDEO_URL = 'https://www.googleapis.com/youtube/v3/videos';

export async function buscarVideosPorTermo(termo, maxResults = 5) {
  try {
    const search = await axios.get(SEARCH_URL, {
      params: {
        part: 'snippet',
        q: termo,
        type: 'video',
        maxResults,
        key: config.youtubeKey,
      },
    });

    const videoIds = search.data.items.map(i => i.id.videoId).join(',');

    const details = await axios.get(VIDEO_URL, {
      params: {
        part: 'snippet,statistics',
        id: videoIds,
        key: config.youtubeKey,
      },
    });

    return details.data.items.map(VideoYoutube.fromApi);
  } catch (error) {
    console.error('Erro na API do YouTube:', error.message);
    return [];
  }
}
