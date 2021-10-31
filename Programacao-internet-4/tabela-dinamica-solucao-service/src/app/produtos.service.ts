import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos : any[] = [
    {id:1,nome:"produto 1", preco:10},
    {id:2,nome:"produto 2", preco:20},
    {id:3,nome:"produto 3", preco:30}
  ];

  constructor() { 
  }

  addProduto(produto: any){
    this.produtos.push(produto);
  }

  getProdutos(){
    return this.produtos;
  }
}
