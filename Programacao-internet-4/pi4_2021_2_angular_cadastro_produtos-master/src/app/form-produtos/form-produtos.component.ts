import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto = {id:0, nome:'', preco: 0.0};
  produtos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  cadastrar() {
    this.produtos.push(this.produto);
    console.log(this.produtos);
    this.produto = {id:0, nome:'', preco: 0.0};
  }

}
