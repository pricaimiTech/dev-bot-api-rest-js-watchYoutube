// app.js
import express from 'express';
import youtubeRoutes from './src/domains/youtube/routes/youtube.routes.js';

const app = express();

app.use(express.json());
app.use('/api/youtube', youtubeRoutes);

export default app;
