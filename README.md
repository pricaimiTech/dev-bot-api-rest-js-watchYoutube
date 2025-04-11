# 📊 TrendWatchYoutube

TrendWatchYoutube é um bot inteligente de monitoramento de conteúdo em alta no YouTube voltado para nichos como Node.js, QA, Desenvolvimento, Engenharia de Software e Automação. Ele busca os vídeos mais visualizados por termo, classifica o engajamento e envia alertas personalizados para canais do Discord organizados por tema.

---

## 🚀 Funcionalidades

- Busca automática de vídeos por termos configurados
- Classificação de engajamento com base nas visualizações
- Envio de alertas formatados para canais do Discord por termo
- Suporte a vários termos por requisição
- Estrutura em domínio para expansão futura (TikTok, etc.)

---

## 🧱 Estrutura do Projeto

```
trend-watch-youtube/
├── bot/
│   └── discordClient.js
├── config/
│   └── env.js
├── domains/
│   └── youtube/
│       ├── controllers/
│       │   └── youtubeController.js
│       ├── dtos/
│       │   └── video.dto.js
│       ├── routes/
│       │   └── youtube.routes.js
│       ├── schemas/
│       │   └── video.schema.js
│       ├── services/
│       │   ├── youtubeService.js
│       │   └── discordService.js
│       └── utils/
│           ├── classificarEngajamento.js
│           └── roterizador.js
└── channelsMap.js
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
YOUTUBE_API_KEY=your_youtube_key
DISCORD_TOKEN=your_discord_token
CHANNEL_NODEJS=1234567890
CHANNEL_QA=...
```

4. Inicie o bot do Discord
```bash
node src/bot/discordClient.js
```

5. Inicie a API
```bash
npm start
```

---

## 📌 Roadmap Futuro
- [ ] Integração com MongoDB
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

