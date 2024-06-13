import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ListaModel } from '../models/ListaModel';
import { ProductoListaModel } from '../models/PruductoLista';
@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private urlEndPoint:string = 'http://localhost:3000/api/list/products/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  private urlEndPointPrd:string = 'http://localhost:3000/api/products/';
  constructor(private http:HttpClient) { }
  getListas(): Observable<ListaModel[]>{
      return this.http.get<ListaModel[]>(this.urlEndPoint);
  }
  getListaById(id:number): Observable<ProductoListaModel[]>{
    console.log(this.urlEndPoint+id);
    return this.http.get<ProductoListaModel[]>(this.urlEndPointPrd+id);
  }
}
