import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../produto';

@Pipe({
  name: 'filtroPesquisa'
})
export class FiltroPesquisaPipe implements PipeTransform {

  transform(listaProdutos: Produto[], valor?: string): Produto[] {
    const nome = valor ? valor : "";

    return listaProdutos.filter((prod) => prod.nome.toLocaleLowerCase().includes(nome.toLocaleLowerCase()))
  }

}
