import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Producto} from '../modelos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('http://localhost:8000/api/productos/');
  }

  getProductoById(id: string){
    return this.http.get(`http://localhost:8000/api/productos/${id}/`);
  }

  saveProducto(producto:Producto){
    return this.http.post(`http://localhost:8000/api/productos/`, producto);
  }

  deleteProducto(id: string){
    return this.http.delete(`http://localhost:8000/api/productos/${id}/`);
  }

  updateProducto(id: string|number , updateProducto:Producto){
    return this.http.put(`http://localhost:8000/api/productos/${id}`, updateProducto);
  }

}
