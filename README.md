```markdown
# 🎯 TrendWatchYoutube

Bot automatizado para monitorar tendências do YouTube em nichos de tecnologia e enviar alertas organizados em canais do Discord.

---

## 🚀 Objetivo

Monitorar vídeos em alta no YouTube em nichos como:
- Desenvolvimento
- QA
- Engenharia de Software
- Node.js
- Automação

Os dados coletados são enviados automaticamente para os canais específicos no Discord, com destaque para vídeos com alto engajamento.

---

## 🧱 Tecnologias utilizadas

- Node.js
- Discord.js
- YouTube Data API v3
- dotenv
- axios

---

## 📁 Estrutura do Projeto

```
trendWatchYoutube/
│
├── config/                # Configurações de ambiente (.env, API keys)
│   └── env.js
│
├── scripts/               # Scripts principais
│   ├── index.js           # Arquivo de entrada (main)
│   └── youtubeSearch.js   # Busca de vídeos por nicho
│
├── bot/                   # Bot do Discord
│   └── discordClient.js   # Setup e conexão com o bot
│
├── utils/                 # Utilitários e suporte
│   └── formatVideoData.js # Formatação da mensagem a ser enviada
│
├── .env                   # Variáveis de ambiente (não versionado)
└── README.md
```

---

## ⚙️ Configuração

1. Clone o repositório:


```bash
git clone https://github.com/seu-usuario/trendWatchYoutube.git
cd trendWatchYoutube
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com as seguintes variáveis:

```env
YOUTUBE_API_KEY= SUA_API_KEY_DO_YOUTUBE
DISCORD_TOKEN= SEU_TOKEN_DO_BOT
CHANNEL_DEFAULT_ID= ID_DE_UM_CANAL_PADRÃO
```

4. Configure os canais por nicho em `config/channelMap.js`:

```js
export const channelMap = {
  dev: 'ID_DO_CANAL_DEV',
  qa: 'ID_DO_CANAL_QA',
  engenharia: 'ID_DO_CANAL_ENGENHARIA',
  nodejs: 'ID_DO_CANAL_NODEJS',
  automacao: 'ID_DO_CANAL_AUTOMACAO',
};
```

---

## ▶️ Executando

Para rodar o bot:

```bash
node index.js
```

---

## 🧠 Funcionalidades futuras

- Geração de roteiros com base na transcrição dos vídeos mais populares.
- Análise automática de risco com IA.
- Painel web com dados e alertas.
- Integração com TikTok (fase pós-monetização do canal).

---

## ✨ Contribuição

Ideias, sugestões ou PRs são sempre bem-vindos. Vamos construir isso juntos! 💡

---

## 📜 Licença

Projeto sob a [MIT License](LICENSE).
```

Se quiser, posso gerar esse arquivo já com o nome certo pra você baixar ou colar direto na pasta do projeto. Deseja isso?