module.exports = class Produto{
    constructor(id, nome, preco){
        this._id = id;
        this._nome = nome;
        this._preco = preco;
    }

    getProduto(){
        return this._nome;
    }
}