import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../shared/user.interface';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  
usuario: any = {
    idrolusuario: 1,
    ide_card: '',
    cell_phone: '',
    name: '',
    email: '',
    password: '',
    status:1
  };

  constructor(private router:Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarioLogeado().subscribe(
      res => {
        console.log(res);
        this.usuario = res;
      },
      err => console.error(err)
      )  
  }
  logout(){
    this.usuarioService.logoutUsuario().subscribe(
      () => {
        console.log("Usuario ha hecho logout correctamente");
        this.router.navigate(['login']);
        
      },
      err => console.error(err)
      )
    }
}