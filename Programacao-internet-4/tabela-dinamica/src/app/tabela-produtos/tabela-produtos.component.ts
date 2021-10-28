import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent extends AppComponent implements OnInit {
  ngOnInit(): void {
  }

}
