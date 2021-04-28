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

module.exports = Conexao;