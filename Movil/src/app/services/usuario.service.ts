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
      return this.http.post('http://localhost:8000/api/register', usuario);
  }

  loginUsuario(usuario:any){
      return this.http.post('http://localhost:8000/api/login',usuario, {withCredentials: true});
  }

  getUsuarioLogeado(){
      return this.http.get('http://localhost:8000/api/user', {withCredentials: true});
  }

  logoutUsuario(){
      return this.http.post('http://localhost:8000/api/logout',{}, {withCredentials: true});
  }

}
