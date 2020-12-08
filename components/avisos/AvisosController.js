const router = require('express').Router()

router.get("/",(req,res)=>{
  res.render('index')
})

router.get("/avisos",(req,res)=>{
  res.render('avisos')
})

router.get("/avisos/novo",(req,res)=>{
  res.render('formulario_avisos')
})

module.exports = router
