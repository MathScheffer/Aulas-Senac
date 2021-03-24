const Produto = require('./produto');
const CadastroProdutos = require('./cadastro_produtos');

let banana = new Produto(1,"banana","R$ 2.5");
console.log(banana.id);

let maca = new Produto(2,"maçã","R$ 3.5");
console.log(maca.id);

let cadastroProdutos = new CadastroProdutos();

cadastroProdutos.inserir(banana);
cadastroProdutos.inserir(maca);
console.log(cadastroProdutos.listar());

cadastroProdutos.deletar(1);
console.log(cadastroProdutos.listar());