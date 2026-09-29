const express = require("express")
const fs = require("fs")

const app = express()
const porta = 3000

app.use(express.json())

let inventario = require("../inventario.json")

function salvar() {
    fs.writeFileSync("../inventario.json", JSON.stringify(inventario, null, 2))
}

app.get("/inventario", (req, res) => {
    res.json(inventario)
})

app.get("/inventario/:id", (req, res) => {
    const id = Number(req.params.id)
    const item = inventario.find(i => i.id === id)

    if (!item) return res.status(404).json({ mensagem: "Item não encontrado" })

    res.json(item)
})

app.post("/inventario", (req, res) => {
    const novoId = inventario.length + 1

    req.body.id = novoId
    inventario.push(req.body)

    salvar()

    res.status(201).json(req.body)
})

app.put("/inventario/:id", (req, res) => {
    const id = Number(req.params.id)
    const indice = inventario.findIndex(i => i.id === id)

    if (indice === -1) return res.status(404).json({ mensagem: "Item não encontrado" })

    req.body.id = id
    inventario[indice] = req.body

    salvar()

    res.json(req.body)
})

app.delete("/inventario/:id", (req, res) => {
    const id = Number(req.params.id)
    const indice = inventario.findIndex(i => i.id === id)

    if (indice === -1) return res.status(404).json({ mensagem: "Item não encontrado" })

    inventario.splice(indice, 1)

    salvar()

    res.json({ mensagem: "Item excluído com sucesso" })
})

app.listen(porta, () => {
    console.log(`Servidor respondendo em http://localhost:${porta}`)
})