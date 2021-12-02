import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  showPassword = false;
  passwordIcon = 'eye-off';

  usuario: any = {
    idrolusuario: 1,
    ide_card: '',
    cell_phone: '',
    name: '',
    lastname:'',
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
    this.usuario = {
      idrolusuario: 1,
      ide_card: '',
      cell_phone: '',
      name: '',
      lastname:'',
      email: '',
      password: '',
      status:1
    };
  }

  onClick():void {
    this.showPassword = !this.showPassword;
    if(this.passwordIcon == 'eye-off'){
      this.passwordIcon = 'eye';
    }else{
      this.passwordIcon = 'eye-off';
    }
  }

}
