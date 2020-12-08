const express = require('express')
const bodyParser = require('body-parser')

//Importando as Rotas Do Aviso
const routerAvisos = require('./components/avisos/AvisosController')

const app = express()

app.set('view engine','ejs')
app.use(express.static('public'))

//Configurar o bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(routerAvisos)

app.listen(3000)
