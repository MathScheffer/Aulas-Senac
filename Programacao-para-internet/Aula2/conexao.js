 const Sequelize = require('sequelize');
 
 class Conexao {
    constructor(){
        this.Sequelize = Sequelize;
        this.sequelize = new Sequelize('test','root','',{
           host:'127.0.0.1',
           dialect:'mysql'
       });
    }

    autenticar(){
        this.sequelize.authenticate()
        .then(response => console.log(response))
        .catch((erro) => {
            console.log("erro: ",erro);
        })
    }

    sincronizarTabela(tabela){
        tabela.sync({force: true});
    }

    getSequelizeClasses(){
        return{
            Sequelize: this.Sequelize,
            sequelize: this.sequelize
        }
    }
}

/* const Produto = sequelize.define('produtos',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nome:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    preco:{
        type:Sequelize.DOUBLE,
        allowNull: false
    }
}); */
//INSERT
/* Produto.create({
    nome:'Banana',
    preco:2.5
}) */
//SELECT
/* const teste = Produto.findAll();
teste.then(response => console.log(response[0].dataValue s))*/

//UPDATE
/* Produto.update({nome: 'Maçã', preco:'3.25'},{
    where: {
        id: 2
    }
}) */

/* Produto.create({
    nome:"teste",
    preco:0.0
}) */
//DELETE
/* Produto.destroy({
    where:{
        nome:"teste"
    }
}) */
//sincroniza com o banco de dados 
//Produto.sync({force: true});

module.exports = Conexao;