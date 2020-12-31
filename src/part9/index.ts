// const express = require('express')
// import express from 'express'

// 组合方法
import express  = require('express')

const app = express()


app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack')
})

app.get('/bmi', (req, res) => {
  console.log(req.query);
  // const weight = +req.query.weight 
  // const height = +req.query.height 
  const {weight, height} = req.query
  res.json({
    weight,
    height,
    bmi:  "Normal (healthy weight)",
  })
})

const PORT = 3000
app.listen(PORT, ()=>{
  console.log('listen port' + PORT);
})













