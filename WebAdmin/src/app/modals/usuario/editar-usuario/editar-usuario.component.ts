import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {UsuarioService} from '../../../services/usuario.service';


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: any = {
    idrolusuario: 0,
    ide_card: '',
    cell_phone: '',
    name: '',
    email: '',
    password: '',
    fechanac: new Date(),
    status: 0,
    
  };

  constructor(private usuarioService:UsuarioService,
    public dialogRef:MatDialogRef<EditarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  actualizarUsuario(){
    this.usuarioService.updateUsuario(this.data.id,this.data).subscribe(
      res => {      
        console.log(res);
        this.closeDialog();  
        this.refresh();
      },
      err => console.error(err)
    )
  }

  closeDialog(){
    this.dialogRef.close();
  }

  refresh(): void {
    window.location.reload();
  }

}
