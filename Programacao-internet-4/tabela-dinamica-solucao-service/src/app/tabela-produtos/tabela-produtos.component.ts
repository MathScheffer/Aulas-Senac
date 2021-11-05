import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';


@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  @Input('nome') name = '';
  @Input() listaProdutos: any[] = []

  produtos: Produto[] = [];
  constructor(private produtosService: ProdutosService) { 
  }
  
  ngOnInit(): void {
    this.produtos = this.getProdutos();
    console.log(this.produtos)
  }

  getProdutos(){
    return this.produtosService.getProdutos();
  } 
}

