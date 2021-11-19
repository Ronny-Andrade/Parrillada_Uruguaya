import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: any = [];
  columnsToDisplay = ['id','nombre','correo','telefono','fechaNac','opciones'];

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this.usuarioService.getData().subscribe(data => {
      this.usuarios = data;
    });
  }

  eliminarUsuario(id: string){
    this.usuarioService.deleteUsuario(id).subscribe(
      res => {
        console.log(res);
        this.obtenerUsuarios()
      },
      err => console.error(err)
    )
  }

}
