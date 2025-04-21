// src/domains/youtube/routes/youtubeRoutes.js
import Router from 'express';
import YoutubeController from '../domains/youtube/controllers/YoutubeController.js'

const router = Router();

/**
 * @swagger
 * /api/youtube/top-videos:
 *   post:
 *     summary: busca top 5 videos pelo termo informado
 *     description: Ao receber uma lista de termos, irá buscar no youtube os top 5 retornar os dados, disparar o resultado no bot do discord e salvar os dados no banco de dados
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               termos:
 *                 type: array
 *                 items:
 *                   type: string
 *             example:
 *               termos: ["jest", "supertest", "qa", "dev", "engenharia de software", "automação de teste"]
 *     responses:
 *       200:
 *         description: ok
 */
router.post('/top-videos', YoutubeController.getTopVideos);

export default router;
