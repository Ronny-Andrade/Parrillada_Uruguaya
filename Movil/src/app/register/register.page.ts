import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
  }

 async onRegister(){
  this.usuarioService.saveUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['login']);
      },
      err => console.error(err)
    )
  }

}
