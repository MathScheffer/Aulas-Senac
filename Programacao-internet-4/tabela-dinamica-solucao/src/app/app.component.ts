import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cadastro-produtos';
  componenteTabela = 'Tabela de produtos';
  produtos : any[] = [
    {id:1,nome:"prod1", preco:10},
    {id:2,nome:"prod2", preco:20},
    {id:3,nome:"prod3", preco:30}
  ]

  addProduto(produto: any){
    this.produtos.push(produto);
  }
}
