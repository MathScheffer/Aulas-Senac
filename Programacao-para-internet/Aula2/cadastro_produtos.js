//const { Sequelize } = require('sequelize');
const Conexao = require('./conexao');

class CadastroProdutos {
    constructor(){
        this.produtos = [];
        this.conexao = new Conexao();
        this.conexao.autenticar();
        this.Sequelize = this.conexao.getSequelizeClasses().Sequelize;
        this.sequelize = this.conexao.getSequelizeClasses().sequelize;

        this.Produto = this.sequelize.define('produtos',{
            id:{
                type: this.Sequelize.INTEGER,
                primaryKey:true,
                autoIncrement: true
            },
            nome:{
                type: this.Sequelize.TEXT,
                allowNull: false
            },
            preco:{
                type: this.Sequelize.DOUBLE,
                allowNull: false
            }
        });

        //this.conexao.sincronizarTabela(this.Produto);
    }

    conectar(){
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize('test','root','',{
            host:'127.0.0.1',
            dialect:'mysql'
        })
        return {
            Sequelize: Sequelize,
            sequelize: sequelize
        }
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

    //Metodos do sequelize
    async update(objDados, filtro) {
        await this.Produto.update(objDados,{
            where: filtro
        });
    }

    insert(produto){
        this.Produto.create({
            nome: produto.getNome(),
            preco: produto.getPreco()
        })
    }

    async selectByPreco(preco){
        const body = await this.Produto.findAll({
            where:{
                preco: preco
            }
        });
        return body.map(produto => produto.dataValues);
    }

    delete(filtro) {
        this.Produto.destroy({
            where: filtro
        })
    }

    atualizarSeq(id) {
        
    }

}
module.exports =  CadastroProdutos;