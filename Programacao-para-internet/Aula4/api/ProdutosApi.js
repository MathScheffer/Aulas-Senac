const Config = require('../config');
const Produto = require('../classes/Produto');
const db_properties = require('../resources/db.json');

module.exports = class ProdutosApi{
     constructor(){    
    
        this.db_produtos = db_properties.db_produtos;
        this.db = new Config(this.db_produtos.host, this.db_produtos.user, this.db_produtos.password, this.db_produtos.dbName);
        this.db_con = this.db.getConnection();

    }

    listar(callback){
        let sql = "SELECT * FROM PRODUTOS";
        this.db_con.connect();

        this.db_con.query(sql, (err,result) => {
            if(err){
                callback(err,null);
            }else{
                let json = JSON.parse(JSON.stringify(result));
                callback(null,json)
            }
        });

        this.db_con.end();
    }

    async getAllProd(callback){
        let sql = "SELECT * FROM PRODUTOS";
        this.db_con.connect();

        const prod =  this.db_con.query(sql, (err,result) => {
            if(err){
                callback(err,null)
            }else{
                let json = JSON.parse(JSON.stringify(result));
                callback(null, json);
            }
        });

        this.db_con.end();
    }
}