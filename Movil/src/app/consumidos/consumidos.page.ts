import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-consumidos',
  templateUrl: './consumidos.page.html',
  styleUrls: ['./consumidos.page.scss'],
})
export class ConsumidosPage implements OnInit {
  
  usuario: any = {
    id: '',
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

  productosDelCliente:any = [];
  listaproducto = [];
  listacantidad =[];
  final = {};
  listagetproductos:any=[];

  constructor(private menu:MenuService, private usuarioservice:UsuarioService) { }

  ngOnInit() {
    this.getUsuario();
    this.getProductocliente();

  }
  
  getUsuario(){
    this.usuarioservice.getUsuarioLogeado().subscribe(
      res =>{
        console.log(res)
        this.usuario = res
        
      },
      err =>{
        console.log(err)
      }
    )
  }

  getProductocliente(){
    var repetidos = {}
    this.menu.getProductoCliente().subscribe(
      data => {
        for(const [key,value] of Object.entries(data)){
          if(value["idcliente"] === this.usuario.id){
              this.productosDelCliente.push(value["idproducto"]);
              
          }
        }
        this.productosDelCliente.forEach(function(numero:any){
          repetidos[numero] = (repetidos[numero] || 0) + 1;
        });
        this.final = repetidos;
        console.log(this.final)
        for(const [key,value] of Object.entries(this.final)){
          if(value > 2){
            this.menu.getProductoById(key).subscribe(
              data =>{
                this.listagetproductos.push(data);
                console.log(this.listagetproductos)
              },
              err =>{
                console.log(err);
              }
            )
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
