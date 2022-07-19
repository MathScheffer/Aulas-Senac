import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';
import { ProdutoApiService } from '../service/produto-api.service';


@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  @Input('nome') name = 'Tabela de Produtos';
  @Input() listaProdutos: any[] = []

  produtos: Produto[] = [];
  nomePesquisado = "";

  constructor(private produtosService: ProdutosService,
              private produtoApiService: ProdutoApiService) { 
    this.listar();
  }
//Esta função irá atualizar o fetch dos dados sempre que chamada.
  listar(){
    this.produtoApiService.getProdutos().subscribe(
      data => {
        this.produtos = data;
      }
    )
  }

  deletar(id: number){
    this.produtoApiService.deletar(id).subscribe(
      res => {
        this.listar()
        console.log(res)
      }
    )
  }
  
  ngOnInit(): void {
    console.log(this.produtos)
  }
}

