const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send("Seja bem-vindo")
})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3002")
})

