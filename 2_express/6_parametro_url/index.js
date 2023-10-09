const express = require("express")
const path = require("path")

const app = express()

const caminho = path.join(__dirname, "templates")

app.get('/usuarios', (requisicao, resposta) => {
    const id = requisicao.params.id
    console.log('o usuario ${id} está desaparecido')

    resposta.sendFile(`${caminho}/index.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3002")
})

