const mysql = require('mysql');

class Config {
    constructor(host,user,password, database){
        this.__con = mysql.createConnection({
            host:host,
            user:user,
            password:password,
            database:database
        })
    }

    getConnection(){
        return this.__con;
    }

    connect(){
        this._con.connect((error)=> {
            if(error){
                throw error;
            }else{
                console.log("conectado");
            }
        })
    }

    endConnection(){
        this._con.end();
    }

    //"crud_produtos_db"
}

module.exports = Config;