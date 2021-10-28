import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'form-produto',
  templateUrl: './form-produto.component.html',
  styleUrls: ['./form-produto.component.css']
})
export class FormProdutoComponent extends AppComponent implements OnInit {

  ngOnInit(): void {
  }

  atualizarProdutos(event: any) {
    /**
     * Adicionar PreventDefault
     * 
    */
     const nome = (<HTMLInputElement>document.getElementById("nome")).value;
     const preco = (<HTMLInputElement>document.getElementById("preco")).value;
     
    const novoProduto = {
      id: this.retornaUltimoId()+1,
      nome: nome,
      preco: parseInt(preco)
    }

    AppComponent.PRODUTOS.push(novoProduto);
    /* this.addProduto(novoProduto) */
  }



}
