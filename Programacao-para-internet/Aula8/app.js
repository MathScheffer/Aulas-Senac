const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.get('/',(req,res) => {
    res.send('chegou na raiz')
})

app.get('/produto/:id',(req,res) => {
    const id = req.params.id;
    const selecionaProduto = (id) =>{
        switch(id){
            case 1: 
                return 'Banana';
                break;
            case 2:     
                return 'Maça';
                break;
            default:
                return 'Sem produtos';
        }
    }
    res.send('chegou na request por id')
})


app.post('/produto',(req,res) => {
    const produtos = ['banana','maçã','morango'];
    produtos.push[req.body.produto]
    console.log(req.body.produto)
    res.send(produtos)
})

app.put('/produto/:id',(req,res)=>{
    const index = req.body.index;
    produtos[index] = req.body.nome_produto;

    res.send(produtos);
})

app.delete('/produto/:id',(req,res)=>{

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })