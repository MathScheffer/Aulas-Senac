import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto = new Produto();

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtosService.addProduto(this.produto);
    this.produto = new Produto();
  }

}
