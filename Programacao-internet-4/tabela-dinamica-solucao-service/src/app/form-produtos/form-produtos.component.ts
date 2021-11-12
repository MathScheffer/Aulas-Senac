import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto = new Produto();
  id!: number; 
  botaoAcao = "Cadastrar";

  constructor(
    private produtosService: ProdutosService, 
    private route: ActivatedRoute, 
    private router: Router) {
    
   }

  ngOnInit(): void {
    /**
     * snapshot = estado atual
     * params = parâmetors da rota
    */
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    
    if(this.id){
      this.botaoAcao = "editar"
    }
  }

  cadastrar() {
    if(!this.id){
      this.produtosService.addProduto(this.produto);
      this.produto = new Produto();
    }else{
      //Método de editar
    }
  }

  cancelar() {
    this.router.navigate(['/tabela'])
  }

}
