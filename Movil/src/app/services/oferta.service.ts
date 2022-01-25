import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  API= 'https://parrilladauru.pythonanywhere.com/api/'

  constructor(private http: HttpClient) { }

  getOfertas(){
    return this.http.get(this.API+"ofertas/")
    .pipe(tap(console.log)); 
  }
  

}