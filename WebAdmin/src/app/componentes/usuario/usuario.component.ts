import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {UsuarioService} from '../../services/usuario.service';
import {MatSort} from '@angular/material/sort';
import {Usuario} from '../../modelos/usuarios';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  usuarios: any = [];
  ELEMENT_DATA: Usuario[]=[];
  columnsToDisplay: string[] = ['name','ide_card','email','cell_phone','fechanac','opciones'];
  dataSource = new MatTableDataSource<Usuario>(this.ELEMENT_DATA);


  constructor(private usuarioService:UsuarioService) { }

  @ViewChild(MatSort) sort: MatSort;



  ngOnInit() {
    this.obtenerUsuarios();
    
  }

  obtenerUsuarios(){
    this.usuarioService.getData().subscribe(
      data => {
        this.dataSource.data=data  as Usuario[]
        this.dataSource.sort = this.sort;
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

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }



}
