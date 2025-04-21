# 📊 TrendWatchYoutube

🟡 Em andamento o desenvolvimento

TrendWatchYoutube é um bot inteligente de monitoramento de conteúdo em alta no YouTube voltado para nichos como Node.js, QA, Desenvolvimento, Engenharia de Software e Automação. Ele busca os vídeos mais visualizados por termo, classifica o engajamento e envia alertas personalizados para canais do Discord organizados por tema.

---

## 🚀 Funcionalidades

- Busca automática de vídeos por termos configurados 🟢	
- Classificação de engajamento com base nas visualizações 🟢	
- Envio de alertas formatados para canais do Discord por termo 🟢	
- Suporte a vários termos por requisição 🟢	
- Estrutura em domínio para expansão futura (TikTok, etc.) 🟢	
- Integrado com mongodb 🟢	
- Swagger 🟢	

---

## 🧱 Estrutura do Projeto

```
trend-watch-youtube/
├── src/
│   └── bot/
│       │   └── discordClient.js
│   └──  config/
│       │   └── canalMap.js
│       │   └── db.js
│       │   └── env.js
│       │   └── swagger.js
│   └──  domains/
│       │   └── youtube/
│       │   |   └──controllers/
│       │   |       └── YoutubeController.js
│       │   |   └──models/
│       │   |       └── VideoYoutube.js
│       │   |   └──schema/
│       │   |       └── YoutubeVideoSchema.js
│       │   |   └──services/
│       │   |       └── discord.js
│       │   |       └── youtube.js
│   └──  insomnia/
│   └──  routes/
│       │   └── youtube.routes.js
│  └── utils/
│       ├── classificarEngajamento.js
│       └── dates.js
│       └── roterizador.js
│       └── saveReportDb.js
└── .env
└── .gitignore
└── app.js
└── package.json
└── README.MD
└── server.js
```

---

## 🧪 Requisição para rota POST

`POST /api/youtube/top-videos`

### Body:
```json
{
  "termos": [
    "nodejs",
    "qa",
    "dev",
    "engenharia de software",
    "automção de testes"
  ]
}
```

### Response:
```json
{
  "nodejs": [
    {
      "id": "abc123",
      "titulo": "What is Node.js?",
      "canal": "TechChannel",
      "visualizacoes": 100000,
      "publicacao": "2022-01-01T00:00:00Z",
      "link": "https://youtube.com/watch?v=abc123",
      "engajamento": {
        "destaque": true,
        "nivel": "🔥 Viral"
      }
    }
  ]
}
```

---

## 📡 Alertas no Discord

Os vídeos com maior destaque são enviados para o canal correspondente ao termo usando o `canalMap.js`. A mensagem enviada contém:

- Título
- Canal
- Publicação
- Visualizações
- Link
- Nível de engajamento

---

## 🛠️ Setup do Projeto

1. Clone o repositório
```bash
git clone https://github.com/SEU_USUARIO/trend-watch-youtube.git
cd trend-watch-youtube
```

2. Instale as dependências
```bash
npm install
```

3. Configure o `.env`
```env
YOUTUBE_API_KEY=<SEU_ID_AQUI>
DISCORD_TOKEN=<SEU_ID_AQUI>
CANAL_DEFAULT_ID=<SEU_ID_AQUI>
CANAL_DEV_ID=<SEU_ID_AQUI>
CANAL_QA_ID=<SEU_ID_AQUI>
CANAL_ENG_ID=<SEU_ID_AQUI>
CANAL_JEST_ID=<SEU_ID_AQUI>
CANAL_AUTOMACAO_ID=<SEU_ID_AQUI>
MONGO_URI=<SUA_STRING_DE_CONECÇAO_AQUI>
```

4. Inicie o servidor
```bash
npm run dev
```

---

## 📌 Roadmap Futuro
- [x] Integração com MongoDB
- [ ] Transcrição automática dos vídeos em destaque
- [ ] Painel web para visualização e gestão
- [ ] Integração com TikTok e outras redes
- [ ] Agendamento com cron e deploy na nuvem

---

## 👩‍💻 Feito por
**Priscila Caimi** - Engenheira de Software & Criadora de Conteúdo Tech

Contribuições, issues e feedbacks são super bem-vindos! 💜

---

## 📄 Licença
Este projeto está licenciado sob a MIT License.

