import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  valueSelected:string = "1"
  alimentos:any;
  tipoProducto:any;
  textoBuscar:string= '';
  principales=[];
  adicionales=[];
  bebidas=[];
  recomendable=[];

  constructor(private menu:MenuService) {}
  ngOnInit() {
    
    this.tipoProducto = this.menu.getTipoProducto();
    this.alimentos = this.menu.getMenu();
    this.agregarPri();
    this.agregarBebi();
    this.agregarAdi(); 
    this.agregarReco();   
  }

  recortar(text, limit): string{
    if (text.length > limit){
      for (let i = limit; i > 0; i--){
          if(text.charAt(i) === ' ' && (text.charAt(i-1) != ','||text.charAt(i-1) != '.'||text.charAt(i-1) != ';')) {
              return text.substring(0, i) + '...';
          }
      }
       return text.substring(0, limit) + '...';
  }
  else
      return text;
  }

  agregarPri(){
    this.menu.getMenu().subscribe(data =>{
      for (const [key, value] of Object.entries(data)) {
        if(value["idtipoproducto"] === 1){
          value["nombre"] = this.recortar(value["nombre"], 30);
          value["descripcion"] = this.recortar(value["descripcion"], 32);  
          this.principales.push(value);
        }  
      }
    });
  }
  agregarAdi(){
    this.menu.getMenu().subscribe(data =>{
      for (const [key, value] of Object.entries(data)) {
        if(value["idtipoproducto"] === 2){
          value["nombre"] = this.recortar(value["nombre"], 30);
          value["descripcion"] = this.recortar(value["descripcion"], 32);  
          this.adicionales.push(value);
        }  
      }
    });
  }
  agregarBebi(){
    this.menu.getMenu().subscribe(data =>{
      for (const [key, value] of Object.entries(data)) {
        if(value["idtipoproducto"] === 3){
          value["nombre"] = this.recortar(value["nombre"], 30);
          value["descripcion"] = this.recortar(value["descripcion"], 32);  
          this.bebidas.push(value);
        }  
      }
    });
  }

  agregarReco(){
    this.menu.getMenu().subscribe(data =>{
      for (const [key, value] of Object.entries(data)) {
        if(value["recomendable"] === 1){
          value["nombre"] = this.recortar(value["nombre"], 30);
          value["descripcion"] = this.recortar(value["descripcion"], 32);  
          this.recomendable.push(value);
        }  
      }
    });
  }

  buscar(event:any){
    this.textoBuscar = event.detail.value;
  }

  mostrarData(id:any) {
    console.log(id)
    this.menu.getProductoById(id).subscribe(res => console.log(res), err => console.error(err));
  }

  segmentChanged(event: any){
    this.valueSelected = event.detail.value;
    console.log(this.valueSelected);
  }



}
