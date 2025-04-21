import mongoose from 'mongoose';

/**
 * @description: Schema for Youtube videos para salvar os dados no banco de dados.
 */

const metricaSchema = new mongoose.Schema({
  likes: Number,
  comentarios: Number,
  views: Number,
  compartilhamentos: Number,
}, {
  _id: false,
});

const VideoSchema = new mongoose.Schema({
  correlationID: String,
  titulo_video: String,
  descricao: String,
  canal: String, //
  publicacao: Date, //
  nivelEngajamento: String,
  metricas: metricaSchema,
  link: String, //
},
{
  _id: false,
});

const RelatorioPorTermoSchema = new mongoose.Schema({
  termo: String,
  videos: [VideoSchema],
}, {
  _id: false,
})

const reportSemanalSchema = new mongoose.Schema({
  semana: String,
  plataforma: String,
  relatorioPorTermo: [RelatorioPorTermoSchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('reportSemanalYoutube', reportSemanalSchema);
