const express = require('express');
const rotas = express.Router();
const usuariosController = require('../controller/UsuariosController');

rotas.post("/",usuariosController.fakeLogin)
rotas.post("/validation",usuariosController.validarToken)

module.exports = rotas;