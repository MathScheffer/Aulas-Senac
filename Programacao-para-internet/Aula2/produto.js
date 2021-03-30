class Produto{
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    getNome(){
        return this.nome;
    }

    getPreco(){
        return this.preco;
    }
}

module.exports = Produto;

