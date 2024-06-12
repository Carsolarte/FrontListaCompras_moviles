import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { SitioModel } from '../models/SitioModel';
@Injectable({
  providedIn: 'root'
})
export class SitioService {
  private urlEndPoint:string = 'http://localhost:3000/api/place/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getSitios(): Observable<SitioModel[]>{
    return this.http.get<SitioModel[]>(this.urlEndPoint);
  }
  agregarSitio(sitio:SitioModel):Observable<SitioModel>{
    return this.http.post<SitioModel>(this.urlEndPoint, sitio, {headers: this.httpHeaders}).pipe(
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
