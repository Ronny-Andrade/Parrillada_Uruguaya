import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';
import { User } from '../shared/user.interface';
import { AlertController } from '@ionic/angular';


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
    lastname: '',
    email: '',
    password: '',
    fechanac: '',
    status:1
  };

  constructor(
    private router:Router, 
    private usuarioService: UsuarioService,
    public alertController: AlertController) { }

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

    actualizar(){
      this.usuarioService.updateUsuario(this.usuario.id,this.usuario).subscribe(
        res =>{
          console.log(res)
        }
      )
      this.presentAlert();
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        //cssClass: 'my-custom-class',
        header: 'Actualizado',
        subHeader: 'Cambios guardados',
        //message: 'This is an alert message.',
        //buttons: ['OK']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  

}