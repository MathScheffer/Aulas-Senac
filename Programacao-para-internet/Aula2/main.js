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

/* 
let limao = new Produto("Limão",2.3);
console.log(`Nome: ${limao.getNome()} | Preço: ${limao.getPreco()}`);
cadastroProdutos.insert(limao)
 */

/* 
let pimenta = new Produto("Pimenta",0);
console.log(`Nome: ${pimenta.getNome()} | Preço: ${pimenta.getPreco()}`);
cadastroProdutos.insert(pimenta)
 */

/* 
cadastroProdutos.update({preco: 0.5},{preco: 0});
 */


/*
let alface = new Produto("Alface",1.7);
cadastroProdutos.insert(alface);
*/

cadastroProdutos.selectByPreco(0.5).then(produtos => console.log(produtos))

/* 
let teste = new Produto("teste","teste");
cadastroProdutos.insert(teste);

cadastroProdutos.delete({nome:3});
 */