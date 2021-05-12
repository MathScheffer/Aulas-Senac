const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produtos', (req, res) => {
    res.send('Pegando produto')
  })

app.post('/produtos',(req,res)=>{
  //console.log(req.body)
  console.log('body aqqui:'+JSON.stringify(req.body))
  //res.json(req.body)
  //res.send(JSON.stringify(req.body))
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})