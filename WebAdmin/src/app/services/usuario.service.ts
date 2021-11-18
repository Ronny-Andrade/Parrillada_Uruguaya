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
    return this.httpClient.get('http://localhost:8000/api/list');
  }

  loginUsuario(usuario:any){
    return this.httpClient.post('http://localhost:8000/api/login',usuario, {withCredentials: true});
  }

  getUsuarioLogeado(){
  return this.httpClient.get('http://localhost:8000/api/user', {withCredentials: true});
  }

  logoutUsuario(){
    return this.httpClient.post('http://localhost:8000/api/logout',{}, {withCredentials: true});
  }

  getdatabyId(id: string){
    return this.httpClient.get(`http://localhost:8000/api/user-detail/${id}/`);
  }

  saveUsuario(usuario:Usuario){
    return this.httpClient.post('http://localhost:8000/api/register', usuario);
}

  deleteUsuario(id: string){
    return this.httpClient.delete(`http://localhost:8000/api/user-delete/${id}/`);
  }
  
  updateUsuario(id: string|number , updatedUsuario: Usuario){
    return this.httpClient.put(`http://localhost:8000/api/user-update/${id}/`,updatedUsuario);
  }
}
