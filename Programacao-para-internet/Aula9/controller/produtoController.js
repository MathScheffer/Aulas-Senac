const conexao = require('../config/conexaodb');
const Utils = require('../Utils/Utils');

exports.listar = (req, res) => {
    const sql = "SELECT * FROM produtos";

    conexao.query(sql, (erro, rows) =>{
        if(erro){
            res.status(500).json({"Message":"Houve um erro interno no sistema!"})
        }else{
            res.json(rows)
        }
    })
    //res.send('Birds home page');
};

exports.especifico = (req, res) => {
    const sql = "SELECT * FROM produtos WHERE id=?";
    const id = req.params.id;
    
    conexao.query(sql,[id],(erro,rows)=>{
        if(erro){
            res.status(500).json({"Messagem":"Houve um erro interno no sistema!"});
        }else{
            res.status(200).json(rows);
        }
    })
};

exports.inserir = (req, res) => {
    const produto = req.body;
    const sql = "INSERT INTO produtos(nome,preco) VALUES(?,?)";
    conexao.query(sql,[produto.nome, produto.preco],(erro, rows) => {
        if(erro){
            res.status(200).json({"erro":"DatabaseError"})
            console.log(erro)
        }else{
            produto.id = rows.insertId;
            res.status(201).json(produto)
        }
    })

/*     produto = JSON.stringify(req.body);
    res.status(201).send(`Adicionou produto ${produto}`); */
};

exports.atualizar = (req,res) => {
    const id = req.params.id;
    const produto = req.body;

    const sql =  "UPDATE produtos SET nome=?, preco=? WHERE id=?";
    conexao.query(sql,[produto.nome,produto.preco,id],(erro,rows)=>{
        if(erro){
            res.status(500).json("Houve um erro interno no sistema!")
            //console.log(erro)
        }else{
            res.status(200).json(rows);
        }
    })
}

exports.atualizarSafe = (req,res) => {
    const id = req.params.id;
    const produto = req.body; 
    const produtoObj = Utils.jsonToMap(produto);
    const params = ["nome","preco"];
    let query = [],values = [];
    params.forEach(key => {
        if(produtoObj.has(key) && produtoObj.get(key)){
            query.push(`${key}=?`);
            values.push(produto[key])
        }
    })
    
    values.push(id)
    const sql =  `UPDATE produtos SET ${query.toString()} WHERE id=?`;
    conexao.query(sql,values,(erro,rows)=>{
        if(erro){
            res.status(500).json("Houve um erro interno no sistema!")
            console.log(erro)
        }else{
            res.status(202).json(query.toString());
        }
    })
}
exports.deletar = (req,res) => {
    res.send(`Deletou produto ${req.params.id}`)
}