const express = require('express')
const app = express() // principal do sistema

app.get('/', (req, res)=>{
    res.send('Seja bem vindo(a) ao backend')
})

app.get('/sobre', (req, res)=>{ //precisa colocar a / para construir a rota
    res.send('Minha página sobre')
})

app.get('/blog', (req, res)=>{
    res.send('Aqui é o nosso blog')
})

app.get('/Ola/:nome/:sobrenome', (req, res)=>{
    res.send(req.params) // a funçao send só pode ser enviada uma vez
 
})





app.listen(3003, ()=>{
    console.log('Servidor rodando na porta 3003')
}) //última linha do código - ela dispara um evento

