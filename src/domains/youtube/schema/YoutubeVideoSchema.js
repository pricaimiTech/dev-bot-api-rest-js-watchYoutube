import mongoose from 'mongoose';

/**
 * @description: Schema for Youtube videos para salvar os dados no banco de dados.
 */
const YoutubeVideoSchema = new mongoose.Schema({
  id: String,
  titulo: String,
  canal: String,
  publicacao: Date,
  visualizacoes: Number,
  link: String,
});

export default mongoose.model('YoutubeVideo', YoutubeVideoSchema);
