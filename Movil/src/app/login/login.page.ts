import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


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

  constructor(
    private router:Router, 
    private usuarioService: UsuarioService,
    public loadingController: LoadingController,
    public alertController: AlertController
    ) { }

  showPassword = false;
  passwordIcon = 'eye-off';


  ngOnInit() {
  }

  onLogin(){

    this.presentLoadingWithOptions();
    this.usuarioService.loginUsuario(this.datainfo).subscribe(
      res => {
        console.log(res);

        this.loadingController.dismiss();

        this.router.navigate(['']);
      },
 
      err => {
        console.error(err)
        this.loadingController.dismiss();
        this.presentAlert();
      }
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

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      //duration: 5000,
      message: 'Iniciando sesión',
      //translucent: true,
      //cssClass: 'custom-class custom-loading',
      //backdropDismiss: true
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed with role:', role);
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: 'Verifique su usuario',
      //message: 'This is an alert message.',
      //buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
