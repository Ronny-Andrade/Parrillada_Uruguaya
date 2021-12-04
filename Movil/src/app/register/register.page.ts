import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/usuario.service';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  showPassword = false;
  passwordIcon = 'eye-off';

  usuario: any = {
    idrolusuario: 2,
    ide_card: '',
    cell_phone: '',
    name: '',
    lastname:'',
    email: '',
    password: '',
    fechanac: '',
    status:1
  };

  constructor(private router:Router, 
    private usuarioService: UsuarioService,
    public loadingController: LoadingController) { }

  ngOnInit() {
  }

 async onRegister(){
  this.presentLoadingWithOptions();
  this.usuarioService.saveUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
        this.loadingController.dismiss();
        this.router.navigate(['login']);
      },
      err => console.error(err)
    )
    this.usuario = {
      idrolusuario: 2,
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

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //duration: 5000,
      message: 'Registrando espere',
      //translucent: true,
      //cssClass: 'custom-class custom-loading',
      //backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }

}
