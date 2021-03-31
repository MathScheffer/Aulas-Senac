const mysql = require('mysql');

let con = mysql.createConnection({
    host:"127.0.0.1",
    user:'root',
    password:'',
    database:"crud_produtos_db"
})

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
        console.log(result);
    })
})