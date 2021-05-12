const express = require('express');
const rotas = express.Router();
const produtoController = require('../controller/produtoController');


rotas.get('/', produtoController.listar);

rotas.get('/:id',produtoController.especifico);

rotas.post('/', produtoController.inserir);

rotas.put('/:id',produtoController.atualizar);
rotas.put('/safe/:id',produtoController.atualizarSafe);

rotas.delete('/:id',produtoController.deletar);

module.exports = rotas;