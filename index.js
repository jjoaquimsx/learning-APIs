const express = require('express')
const app = express()


// http://localhost:3000/tabela?linhas=10&colunas=10
app.get('/tabela', function (req, res, next) {
    req.tabela = {
        linhas: parseInt(req.query.linhas),
        colunas: parseInt(req.query.colunas)

    }
    next()
})


app.get('/tabela', function (req, res) {
    let num = 1
    let tabela = '<table border="1">'

    for (let l = 0; l < req.query.linhas; l++) {
        tabela += '<tr>'
        for (let c = 0; c < req.tabela.colunas; c++) {
            tabela += `<td>${num}</td>`
            num++
        }
        tabela += '</tr>'
    }

    tabela += '</table>'
    res.send(tabela)
})

app.listen(3000, () => console.log('Inicio...'))