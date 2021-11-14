import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto} from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://ricardovilcacundo.pythonanywhere.com/pro/productos/');
  }

  getProductoById(id: string){
    return this.http.get(`https://ricardovilcacundo.pythonanywhere.com/pro/productos/${id}/`);
  }

  saveProducto(producto:Producto){
    return this.http.post(`https://ricardovilcacundo.pythonanywhere.com/pro/productos/`, producto);
  }

  deleteProducto(id: string){
    return this.http.delete(`https://ricardovilcacundo.pythonanywhere.com/pro/productos/${id}/`);
  }

  updateProducto(id: string|number , updateProducto:Producto){
    return this.http.put(`https://ricardovilcacundo.pythonanywhere.com/pro/productos/${id}`, updateProducto);
  }

}
