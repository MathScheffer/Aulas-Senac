const mysql = require('mysql');

conexao = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_produtos_db"
    });

module.exports = conexao;