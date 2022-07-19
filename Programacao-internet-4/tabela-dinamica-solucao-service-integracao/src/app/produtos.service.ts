import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos : Produto[] = [
    {_id:1,nome:"produto 1", preco:10},
    {_id:2,nome:"produto 2", preco:20},
    {_id:3,nome:"produto 3", preco:30}
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
