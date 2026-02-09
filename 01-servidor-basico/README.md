# 📡 Módulo 01 - Servidor Básico

Bem-vindo ao primeiro módulo! Aqui você vai criar um **servidor HTTP do zero**, sem usar nenhum framework.

## 🎯 O que você vai aprender

- Como criar um servidor HTTP usando apenas o módulo nativo do Node.js
- Como aceitar conexões TCP
- Como responder requisições
- Como ver logs em tempo real

## 🔥 Como funciona

Um servidor HTTP é um programa que:
1. **Escuta** uma porta (ex: 3000)
2. **Aguarda** requisições
3. **Processa** cada requisição
4. **Responde** com dados

## 💻 Como rodar

```bash
# Instale as dependências
npm install

# Execute o servidor
node server.js
```

Depois abra seu navegador em: **http://localhost:3000**

## 🧪 O que testar

1. Acesse **http://localhost:3000** no navegador
2. Veja a resposta "Hello World"
3. Olhe o terminal - você vai ver logs da requisição!

## 📊 Logs que você vai ver

```
[SERVER] 🚀 Servidor HTTP rodando na porta 3000
[SERVER] 📡 Acesse: http://localhost:3000

[REQUEST] 📥 GET / 
[RESPONSE] 📤 200 OK
```

## 🎓 O que está acontecendo por baixo

```
Navegador faz requisição
        ↓
TCP conecta na porta 3000
        ↓
Servidor recebe
        ↓
Executa função callback
        ↓
Envia resposta "Hello World"
        ↓
Navegador exibe
```

## 🔧 Experimente modificar

1. **Mude a porta**: Troque `3000` por `8080`
2. **Mude a mensagem**: Troque "Hello World" por outra mensagem
3. **Adicione HTML**: Retorne `<h1>Meu Servidor!</h1>`
4. **Veja o erro**: Pare o servidor e tente acessar de novo

## 📚 Próximo módulo

No **Módulo 02**, você vai aprender a fazer **parse das requisições HTTP** (método, URL, headers, body).

---

**Dica**: Leia o código do `server.js` linha por linha. Está tudo comentado! 💡