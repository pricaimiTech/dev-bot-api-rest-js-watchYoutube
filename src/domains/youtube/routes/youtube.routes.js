// src/domains/youtube/routes/youtubeRoutes.js
import { Router } from 'express';
import YoutubeController from '../controllers/YoutubeController.js';

const router = Router();

router.post('/top-videos', YoutubeController.getTopVideos);

export default router;
