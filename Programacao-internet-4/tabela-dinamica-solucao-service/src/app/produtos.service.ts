import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos : Produto[] = [
    {id:1,nome:"produto 1", preco:10, marca:"Marca 1", validade: new Date()},
    {id:2,nome:"produto 2", preco:20, marca:"Marca 2", validade: new Date() },
    {id:3,nome:"produto 3", preco:30, marca:"Marca 1", validade: new Date()}
  ];

  constructor() { 
  }

  addProduto(produto: Produto){
    this.produtos.push(produto);
  }

  getProdutos(){
    return this.produtos;
  }
}
