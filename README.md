# 🌐 HTTP na Prática - Do Zero ao Avançado

Bem-vindo ao projeto educacional mais completo sobre **HTTP, APIs REST e Backend**! 🚀

Este projeto foi criado para ensinar **na prática** como tudo funciona por baixo dos frameworks modernos. Você vai ver cada camada executando em tempo real, com logs detalhados e código comentado linha por linha.

## 🎯 O que você vai aprender

- ✅ Como funciona um servidor HTTP do zero (sem frameworks)
- ✅ Parse de requisições HTTP (método, headers, body)
- ✅ Sistema de roteamento manual
- ✅ Integração com banco de dados (SQLite)
- ✅ Autenticação com JWT
- ✅ Arquitetura completa de API REST

## 📚 Estrutura do Projeto

```
http-na-pratica/
├── 01-servidor-basico/      ← Servidor HTTP puro
├── 02-parsing-http/         ← Parse de requisições
├── 03-rotas/                ← Sistema de rotas
├── 04-banco-dados/          ← SQLite + queries
├── 05-autenticacao/         ← JWT e auth
└── 06-sistema-completo/     ← Tudo integrado
```

## 🔥 Por onde começar

### Pré-requisitos
- Node.js 18+ instalado
- Terminal (cmd, bash, etc)
- Editor de código (VS Code recomendado)

### Ordem recomendada

**1. Módulo 01 - Servidor Básico**
```bash
cd 01-servidor-basico
npm install
node server.js
```
Aprenda: Como criar um servidor HTTP do zero

**2. Módulo 02 - Parsing HTTP**
```bash
cd 02-parsing-http
npm install
node server.js
```
Aprenda: Como fazer parse de requisições HTTP

**3. Módulo 03 - Rotas**
```bash
cd 03-rotas
npm install
node server.js
```
Aprenda: Como criar um sistema de roteamento

**4. Módulo 04 - Banco de Dados**
```bash
cd 04-banco-dados
npm install
node server.js
```
Aprenda: Como integrar com SQLite

**5. Módulo 05 - Autenticação**
```bash
cd 05-autenticacao
npm install
node server.js
```
Aprenda: Como implementar autenticação JWT

**6. Módulo 06 - Sistema Completo**
```bash
cd 06-sistema-completo
npm install
node server.js
```
Aprenda: Como juntar tudo em uma arquitetura profissional

## 🌍 O Fluxo Completo (o que acontece quando você acessa um site)

```
Você digita: https://meusite.com/login
        ↓
[DNS] Resolve o domínio → IP
        ↓
[TCP] Cria conexão com o servidor
        ↓
[HTTPS] Estabelece túnel criptografado
        ↓
[HTTP] Envia requisição POST /login
        ↓
[SERVIDOR] Recebe e processa
        ↓
[ROTEAMENTO] Identifica qual função executar
        ↓
[BANCO DE DADOS] Busca informações
        ↓
[AUTENTICAÇÃO] Valida credenciais
        ↓
[RESPOSTA] Retorna JSON com token
        ↓
Navegador recebe e armazena
```

## 💡 Dicas de Estudo

1. **Execute cada módulo** - Não pule etapas!
2. **Leia os comentários** - O código está explicado linha por linha
3. **Modifique e quebre** - Aprenda testando e errando
4. **Veja os logs** - Eles mostram o que acontece em cada etapa
5. **Compare com frameworks** - Depois veja como Express/Fastify fazem

## 🎓 Próximos Passos

Depois de completar todos os módulos:
- ✅ Estude frameworks (Express, Fastify, Nest.js)
- ✅ Aprenda sobre Docker e deploy
- ✅ Explore bancos mais robustos (PostgreSQL, MongoDB)
- ✅ Estude sobre escalabilidade e performance
- ✅ Construa seu próprio projeto!

## 🤝 Contribuindo

Este é um projeto educacional. Sinta-se livre para:
- Reportar erros
- Sugerir melhorias
- Compartilhar com outros devs
- Fazer fork e adaptar

## 📝 Licença

MIT - Livre para uso educacional e comercial

---

**Feito com 💻 e ☕ para a comunidade dev brasileira**

Bora aprender HTTP de verdade! 🚀😈