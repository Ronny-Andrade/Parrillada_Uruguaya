import { Component, OnInit,Inject } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-usuariomodals',
  templateUrl: './usuariomodals.component.html',
  styleUrls: ['./usuariomodals.component.css']
})
export class UsuariomodalsComponent implements OnInit {

   usuario: any = {
    nombre: '',
    cedula: '',
    correo: '',
    telefono: 0,
    pass_field: '',
    fechanac: new Date(),
    estado: '',
    idrolusuario: 0
  };

  edit: boolean = false;

  constructor(private usuarioService:UsuarioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
      if(params.id) {
        this.usuarioService.getdatabyId(params.id).subscribe(
          res => {
            console.log(res);
            this.usuario = res;
            this.edit = true;
          },
          err => console.error(err)
        )
      }
  }

  guardarUsuario(){
    this.usuarioService.saveUsuario(this.usuario).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    )
  }

  actualizarUsuario(){
    this.usuarioService.updateUsuario(this.usuario.idusuario,this.usuario).subscribe(
      res => {
        alert("El usuario ha sido agregado de forma correcta");
        this.router.navigate(['usuarios']);
      },
      err => console.error(err)
    )
  }
}
