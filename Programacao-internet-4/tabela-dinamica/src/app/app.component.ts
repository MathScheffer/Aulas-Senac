import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static PRODUTOS: Array<any>;
  constructor(){
    AppComponent.PRODUTOS = [
      {id:1,nome:"PRODUTOS",preco:10},
      {id:2,nome:"Prod2",preco:20},
      {id:3,nome:"Prod3",preco:30},
      {id:4,nome:"Prod4",preco:40},
      {id:5,nome:"Prod5",preco:50},
    ]
  }
  title = 'Tabela Dinamica';

  get produtos(){
    return AppComponent.PRODUTOS;
  }

  addProduto(produto: any){
    AppComponent.PRODUTOS.push(produto);
  }

  retornaUltimoId(){
    let idMaior:number = 0;

    AppComponent.PRODUTOS.forEach(prod => {
      if(prod.id > idMaior){
        idMaior = prod.id;
      }
    })

    return idMaior
  }
}
