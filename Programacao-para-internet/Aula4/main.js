const ProdutosApi = require('./api/ProdutosApi');
const Produto = require('./classes/Produto');

//instancias
const produtosApi = new ProdutosApi();


/* produtosApi.listar(function(err, produtos){
    if(err) throw err;
    console.log( produtos);
}); */

produtosApi.getAllProd(function(err, produtos){
    if(err) throw err;
    console.log(produtos);
});

