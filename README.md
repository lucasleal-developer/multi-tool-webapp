# 🛠️ Multi-Tool Web Application

Uma aplicação web completa com **20+ ferramentas interativas** construída com HTML5, CSS3 e JavaScript vanilla. Inclui APIs reais, design responsivo e suporte para túnel Cloudflare.

## ✨ Funcionalidades

### 🎯 Ferramentas Principais
- **📊 Contador** - Contador simples com persistência
- **📝 Bloco de Notas** - Editor de notas com localStorage
- **🎮 Jogo de Adivinhação** - Adivinhe o número secreto
- **🎨 Seletor de Cores** - Paleta de cores interativa

### 🔧 Utilitários
- **🔄 Conversor de Unidades** - Temperatura, peso, distância e velocidade
- **⏱️ Cronômetro** - Com pausa, retomar e reset
- **⏰ Timer** - Temporizador regressivo personalizado
- **🔐 Gerador de Senhas** - Senhas seguras e personalizáveis
- **📱 Gerador de QR Code** - Crie QR codes instantaneamente

### 🌐 APIs Integradas
- **🌤️ Clima** - Dados meteorológicos reais (wttr.in + Open-Meteo)
- **😂 Gerador de Memes** - Com ImgFlip API + fallbacks
- **🌍 Tradutor** - MyMemory API + LibreTranslate
- **🤓 Fatos Curiosos** - API de fatos interessantes
- **🐱 Imagens de Animais** - Gatos, cachorros e raposas aleatórios
- **😄 Piadas** - Gerador de piadas em inglês
- **🔗 Encurtador de URL** - TinyURL integration
- **📍 Consulta CEP** - ViaCEP para endereços brasileiros
- **💰 Conversor de Moedas** - Cotações em tempo real

## 🚀 Como Usar

### Método 1: Python HTTP Server (Recomendado)
```bash
cd multi-tool-webapp
python -m http.server 8080 --bind 0.0.0.0
```

### Método 2: Next.js (Termux/Android)
```bash
npm install
npm run dev
```

Acesse: `http://localhost:8080` ou `http://localhost:3000`

### 🌐 Exposição na Internet (Cloudflare Tunnel)
```bash
# Instalar cloudflared
pkg install cloudflared

# Expor aplicação
cloudflared tunnel --url http://localhost:8080
```

## 📱 Recursos Técnicos

- **✅ Design Responsivo** - Otimizado para mobile e desktop
- **🔄 APIs com Fallback** - Múltiplas APIs para cada funcionalidade
- **💾 Persistência Local** - localStorage para dados do usuário
- **🎨 UI Moderna** - Gradientes, blur effects, animações CSS
- **🌐 PWA Ready** - Funciona offline após carregar
- **🔧 Zero Dependências** - HTML/CSS/JS vanilla

## 🛡️ Tratamento de Erros

Cada funcionalidade possui:
- Validação de entrada
- Múltiplos fallbacks de API
- Mensagens de erro amigáveis
- Modo offline para recursos essenciais

## 📁 Estrutura do Projeto

```
multi-tool-webapp/
├── index.html          # Aplicação principal
├── package.json        # Configuração Next.js
├── tsconfig.json       # Configuração TypeScript
├── next.config.js      # Configuração Next.js
└── README.md          # Documentação
```

## 🎯 APIs Utilizadas

| Ferramenta | API Principal | Fallback |
|------------|---------------|----------|
| Clima | wttr.in | Open-Meteo |
| Memes | ImgFlip | Memegen.link + Canvas |
| Tradutor | MyMemory | LibreTranslate |
| Fatos | UselessFacts | Array local |
| Piadas | Official Joke API | Array local |
| Animais | TheCatAPI/TheDogAPI | RandomFox |
| Moedas | ExchangeRate-API | - |
| CEP | ViaCEP | - |
| QR Code | QRServer | - |
| URL | TinyURL | - |

## 📊 Estatísticas

- **20 ferramentas** funcionais
- **12 APIs reais** integradas
- **100% responsivo** para todos os dispositivos
- **Fallback robusto** para todas as funcionalidades
- **Suporte offline** para ferramentas essenciais

## 🔧 Desenvolvimento

### Pré-requisitos
- Node.js 18+ (para Next.js)
- Python 3+ (para HTTP server)
- Git

### Instalação
```bash
git clone https://github.com/lucasleal-developer/multi-tool-webapp.git
cd multi-tool-webapp
npm install  # Opcional, apenas para Next.js
```

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers
- ✅ Termux (Android)

## 🤖 Gerado com IA

Este projeto foi desenvolvido com a assistência do [Claude Code](https://claude.ai/code) da Anthropic.

---

## 📄 Licença

MIT License - use livremente para projetos pessoais e comerciais.

## 🚀 Deploy

### GitHub Pages
1. Fork este repositório
2. Vá em Settings > Pages
3. Selecione source: Deploy from branch > main
4. Acesse: `https://seu-usuario.github.io/multi-tool-webapp`

### Netlify/Vercel
1. Conecte este repositório
2. Build command: `echo "Static site"`
3. Publish directory: `/`

---

**⭐ Gostou? Deixe uma estrela no repositório!**