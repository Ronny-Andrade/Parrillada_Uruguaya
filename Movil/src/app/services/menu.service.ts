import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  API= 'https://parrilladauru.pythonanywhere.com/api/productos/'
  
  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get(this.API)
    .pipe(tap(console.log)); 
  }
  
  getTipoProducto(){
    return this.http.get('https://parrilladauru.pythonanywhere.com/api/tipoproductos/')
    .pipe(tap(console.log)); 
  }

  getProductoById(id: string){
    return this.http.get(`https://parrilladauru.pythonanywhere.com/api/productos/${id}/`)
    .pipe(tap(console.log)); 
  }

}
