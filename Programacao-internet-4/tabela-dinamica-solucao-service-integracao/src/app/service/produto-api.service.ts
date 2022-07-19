import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../produto';

const httpOptions = {
  headers: new HttpHeaders({
    'contentType': 'Application/json'
  })
}

const apiUri = "http://localhost:3000/api/produtos"

@Injectable({
  providedIn: 'root'
})
export class ProdutoApiService {
  constructor(private http: HttpClient) {  }

  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(apiUri)
  }

  inserir(pro: Produto): Observable<Produto>{
    return this.http.post<Produto>(apiUri,pro,httpOptions)
  }

  buscarPorId(id: number): Observable<Produto>{
    const uri = apiUri+"/"+id;

    return this.http.get<Produto>(uri);
  }

  editar(id: number, produto: Produto): Observable<Produto>{
    const uri = apiUri + "/" + id;

    return this.http.put<Produto>(uri, produto, httpOptions)
  }
  deletar(id: number){
    const uri = apiUri + "/" + id;

    return this.http.delete(uri);
  }
}
