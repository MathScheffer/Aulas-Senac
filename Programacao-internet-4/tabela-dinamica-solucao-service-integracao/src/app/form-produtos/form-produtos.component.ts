import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutosService } from '../produtos.service';
import { ProdutoApiService } from '../service/produto-api.service';

@Component({
  selector: 'form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  produto = new Produto();
  id!: number; 
  mensagem!: string;
  botaoAcao = "Cadastrar";

  constructor(
    private produtosApiService: ProdutoApiService, 
    private route: ActivatedRoute, 
    private router: Router) {
    
   }

  ngOnInit(): void {
    /**
     * snapshot = estado atual
     * params = parâmetors da rota
    */
    this.id = this.route.snapshot.params['id'];
    this.mensagem = ""
    
    if(this.id){
      this.botaoAcao = "editar";

      this.produtosApiService.buscarPorId(this.id).subscribe(prod => {
        this.produto = prod;
      })
    }
  }

  cadastrar() {
    if(!this.id){
      this.produtosApiService.inserir(this.produto).subscribe(prod => {
        this.mensagem = `${prod.nome} cadastrado com sucesso!`;

        this.produto = new Produto();
      })
    }else{
      this.produtosApiService.editar(this.id, this.produto).subscribe(prod => {
        this.mensagem = prod.nome + " editado com sucesso!";

        this.produto = prod;
      })
    }
  }

  cancelar() {
    this.router.navigate(['/tabela'])
  }

}
