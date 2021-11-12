import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';


const rotas: Routes = [
  {path:'tabela', component: TabelaProdutosComponent},
  {path:'form', component: FormProdutosComponent},
  {path:'edit/:id', component: FormProdutosComponent},
  {path:'', redirectTo:"tabela", pathMatch:"full"},
  // '**' -> qualquer outro parâmetro
  {path: '**', redirectTo:"form", pathMatch:"full"}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
