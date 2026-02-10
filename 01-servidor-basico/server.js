// Importa o módulo HTTP nativo do Node.js
const http = require('http');

// Define a porta onde o servidor vai escutar
const PORT = 3000;

// Cores ANSI para logs coloridos
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
};

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  
  // LOG: Mostra que recebeu uma requisição
  console.log(`${colors.blue}[REQUEST]${colors.reset} 📥 ${req.method} ${req.url}`);
  
  // Define o status HTTP (200 = OK)
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  
  // Envia a resposta
  res.end('🌍 Hello World - Meu primeiro servidor HTTP!\n\nVocê acabou de criar um servidor do zero! 🚀');
  
  // LOG: Mostra que enviou a resposta
  console.log(`${colors.green}[RESPONSE]${colors.reset} 📤 200 OK\n`);
});

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`${colors.green}[SERVER]${colors.reset} 🚀 Servidor HTTP rodando na porta ${PORT}`);
  console.log(`${colors.yellow}[SERVER]${colors.reset} 📡 Acesse: http://localhost:${PORT}\n`);
});