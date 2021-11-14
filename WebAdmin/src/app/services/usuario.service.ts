import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
import {Usuario} from '../modelos/usuarios'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) {

   }
   getData(){
    return this.httpClient.get('http://ricardovilcacundo.pythonanywhere.com/usr/usuarios/');
  }
  getdatabyId(id: string){
    return this.httpClient.get(`http://ricardovilcacundo.pythonanywhere.com/usr/usuarios/${id}/`);
  }

  saveUsuario(usuario:Usuario){
      return this.httpClient.post('http://ricardovilcacundo.pythonanywhere.com/usr/usuarios/', usuario);
  }

  deleteUsuario(id: string){
    return this.httpClient.delete(`http://ricardovilcacundo.pythonanywhere.com/usr/usuarios/${id}/`);
  }
  
  updateUsuario(id: string|number , updatedUsuario: Usuario){
    return this.httpClient.put(`http://ricardovilcacundo.pythonanywhere.com/usr/usuarios/${id}/`,updatedUsuario);
  }
}
