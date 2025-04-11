import { buscarVideosPorTermo } from './src/services/youtube.js';

const testarBusca = async () => {
  const resultados = await buscarVideosPorTermo('Node.js backend');
  console.log(resultados);
};

testarBusca();
