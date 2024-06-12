import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ProductoModel } from '../models/ProductoModel';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlEndPoint:string = 'http://localhost:3000/api/products/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  agregarProductos(producto:ProductoModel[]):Observable<ProductoModel[]>{
    return this.http.post<ProductoModel[]>(this.urlEndPoint,producto,{headers:this.httpHeaders}).pipe(
      catchError(
        e => {
          if (e.status == 400) {
            return throwError(e);
          }
          console.log(e.error.mensaje);
          return throwError(e);
      })
      );
  }
}
