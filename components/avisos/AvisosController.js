const router = require('express').Router()

const Avisos = require('./Avisos')

router.get("/", (req, res) => {
  res.render('index')
})

router.get("/avisos", (req, res) => {
  res.render('avisos')
})

router.get("/avisos/novo", (req, res) => {
  res.render('formulario_avisos')
})

//sincrona = ao mesmo tempo
//assincrona = em tempos diferentes
router.post("/avisos/novo", async (req, res) => {
  const titulo = req.body.titulo
  const data = req.body.data
  const mensagem = req.body.mensagem

  const msg = await Avisos.salvar({titulo, data, mensagem})
  res.render('formulario_avisos',{msg})
})

module.exports = router
