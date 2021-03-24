class CadastroProdutos {
    constructor(){
        this.produtos = [];
    }

    inserir(produto){
        this.produtos.push(produto);
    }

    listar(){
        return this.produtos;
    }
//TODO: usar o id do produto para deletá-lo
    deletar(id) {
        this.produtos = this.produtos.filter(produto => {
            return produto.id !== id;
        });
    }

    atualizar(id) {
        
    }
}
module.exports =  CadastroProdutos;