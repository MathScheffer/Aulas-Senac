import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto = {id:0, nome:'', preco: 0.0};

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtosService.addProduto(this.produto);
    this.produto = {id:0, nome:'', preco: 0.0};
  }

}
