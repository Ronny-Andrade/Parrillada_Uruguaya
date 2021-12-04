import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import {Usuario} from '../modelos/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }


  saveUsuario(usuario:Usuario){
      return this.http.post('https://parrilladauru.pythonanywhere.com/api/register', usuario);
  }

  loginUsuario(usuario:any){
      return this.http.post('https://parrilladauru.pythonanywhere.com/api/login',usuario, {withCredentials: true});
  }

  getUsuarioLogeado(){
      return this.http.get('https://parrilladauru.pythonanywhere.com/api/user', {withCredentials: true});
  }

  logoutUsuario(){
      return this.http.post('https://parrilladauru.pythonanywhere.com/api/logout',{}, {withCredentials: true});
  }

  updateUsuario(id: string|number , updatedUsuario: Usuario){
    return this.http.put(`https://parrilladauru.pythonanywhere.com/api/user-update/${id}/`,updatedUsuario);
  }

}
