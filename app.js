// app.js
import express from 'express';
import youtubeRoutes from './src/routes/youtube.routes.js';
import connectDB from './src/config/db.js';

const app = express();
connectDB();

app.use(express.json());
app.use('/api/youtube', youtubeRoutes);

export default app;
