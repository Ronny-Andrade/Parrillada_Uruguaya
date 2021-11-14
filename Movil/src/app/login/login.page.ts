import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  datainfo: any = {    
    email: '',
    password: ''
  };

  constructor(private router:Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

  onLogin(){
    this.usuarioService.loginUsuario(this.datainfo).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['']);
      },
      err => console.error(err)
    )
  }



  private redirectUser(isVerified: boolean) {
    
  }
}
