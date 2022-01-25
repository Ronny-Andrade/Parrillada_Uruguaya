import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-infomenu',
  templateUrl: './infomenu.page.html',
  styleUrls: ['./infomenu.page.scss'],
})
export class InfomenuPage implements OnInit {

  st = "holamunfo";
  variable:any;
  datos = new Array();
  producto:any;
  nombre:string;
  descripcion:string;
  precio:number;
  img:string;
  tipo:string;
  adicionales=[];
  bebidas=[];
  valoresAdicional = [];
  valoresBebida = [];
  precioAdiconal:number;
  contadorAdicional:number = 0;




  //Variables para agregar o restar productos
  unitario:number;
  final:number = 0;
  acumulador:number =1;

  constructor(
    private activatedRoute:ActivatedRoute,
    private menu:MenuService) { }

  ngOnInit() {
    this.menu.getProductoById(this.activatedRoute.snapshot.paramMap.get("idproducto")).subscribe(data =>{
      this.nombre = data.nombre;
      this.descripcion = data.descripcion;
      this.precio = data.precio;
      this.img = data.imagen;
           
      console.log(this.producto);
      this.final = this.precio;

    });

    this.agregarAdi();
    this.agregarBebi();
  }

  recortar(text:any, limit:any): string{
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

  suma(){
    console.log('Suma')
    this.unitario = this.precio;
    this.final= this.final + this.unitario;
    this.acumulador = this.acumulador + 1;
  
  }

  resta(){
    if(this.final > this.precio){
      this.unitario = this.precio;
      this.final= this.final - this.unitario;
      this.acumulador = this.acumulador - 1;
    }
  }

  onClickAdicional( adicional:any ){

    
    if(this.valoresAdicional.includes(adicional)) {
      this.valoresAdicional = this.valoresAdicional.filter((value)=>value!=adicional);

    } else {
      this.valoresAdicional.push(adicional)
    }

    
    
    if(this.valoresAdicional.indexOf(adicional) > -1){
      this.final = this.final + this.valoresAdicional[this.valoresAdicional.indexOf(adicional)]
    }else{
      this.final = this.final - adicional
    }
  }

  onClickBebida(bebi:any){
    if(this.valoresAdicional.includes(bebi)) {
      this.valoresAdicional = this.valoresAdicional.filter((value)=>value!=bebi);

    } else {
      this.valoresAdicional.push(bebi)
    }

    
    
    if(this.valoresAdicional.indexOf(bebi) > -1){
      this.final = this.final + this.valoresAdicional[this.valoresAdicional.indexOf(bebi)]
    }else{
      this.final = this.final - bebi
    }
  }

}