const express = require('express');
const usuariosController = require('./controller/UsuariosController');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const authRotas = require('./rotas/authRotas')
app.use('/api/auth',authRotas)
app.use(usuariosController.validarToken)

const usuarios = require('./rotas/Usuarios');
/* Posso usar assim caso a authRotas esteja independente do usuariosController
app.use('/api/usuarios',usuariosController.validarToken ,usuarios); */
app.use('/api/usuarios' ,usuarios)

/*  Quando a authRotas estiver com controller próprio (metodos de login e
   validação de token), aí ela vem pra baixo do middleware!
const authRotas = require('./rotas/authRotas')
app.use('/api/auth',authRotas) */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
