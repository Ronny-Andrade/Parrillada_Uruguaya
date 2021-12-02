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

  showPassword = false;
  passwordIcon = 'eye-off';


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
    this.datainfo = {    
      email: '',
      password: ''
    };
  }



  private redirectUser(isVerified: boolean) {
    
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
