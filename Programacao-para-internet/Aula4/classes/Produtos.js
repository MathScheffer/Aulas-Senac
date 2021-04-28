const Produto = require('./Produto');
const Api = require('../api/ProdutosApi');

module.exports = class Produtos{
    constructor(listaProdutosJson){
        this.produtos = listaProdutosJson.map(prod => new Produto(prod.id, prod.nome, prod.preco))
    }

    getListaProd(){
        return this.produtos;
    }
}