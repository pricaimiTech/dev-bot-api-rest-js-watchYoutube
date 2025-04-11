import config from './env.js';

export const canalMap = [
    { palavras: ['jest', 'supertest'], canalId: config.channels.jest },
    { palavras: ['qa'], canalId: config.channels.qa },
    { palavras: ['dev'], canalId: config.channels.dev },
    { palavras: ['engenharia', 'engenharia de software'], canalId: config.channels.engenharia },
    { palavras: ['automação', 'automação de testes'], canalId: config.channels.automacao },
]