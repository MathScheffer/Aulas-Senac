
const Config = require('./config');
const Produto = require('./classes/Produto');

const db_properties = require('./resources/db.json');

const db_produtos = db_properties.db_produtos;

const db_con = new Config(db_produtos.host, db_produtos.user, db_produtos.password, db_produtos.dbName);

let con = db_con.getConnection();

con.connect((error)=> {
    if(error){
        throw error;
    }else{
        console.log("conectado");
    }

/*     con.query("INSERT INTO produtos(nome, preco) VALUES (?,?)",["arroz",30.0],(err,result)=>{
        if(error) throw error;
        console.log(JSON.stringify(result))
    }); */

    let sql = "SELECT * FROM PRODUTOS";
    con.query(sql, (err,result) => {
        if(err) throw err;
        json = JSON.parse(JSON.stringify(result))[0];
        console.log(json.preco);
        prod = new Produto(json.id, json.nome, json.preco);
        console.log(prod.getProduto());
    })
})