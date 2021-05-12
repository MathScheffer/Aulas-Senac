const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const produtoRotas = require('./rotas/produtoRotas');

app.use('/api/produtos',produtoRotas)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })