import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-infomenu',
  templateUrl: './infomenu.page.html',
  styleUrls: ['./infomenu.page.scss'],
})
export class InfomenuPage implements OnInit {


  variable:any;
  datos = new Array();

  //Variables para agregar o restar productos
  unitario:number;
  final:number = 0;
  acumulador:number =1;

  constructor(
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.variable = this.activatedRoute.snapshot.paramMap.get("nombre");
    this.datos.push(this.variable);

    this.variable = this.activatedRoute.snapshot.paramMap.get("imagen");
    this.datos.push(this.variable);

    this.variable = this.activatedRoute.snapshot.paramMap.get("precio");
    this.datos.push(this.variable);

    this.variable = this.activatedRoute.snapshot.paramMap.get("descripcion");
    this.datos.push(this.variable);

    this.final = this.datos[2];
  }

  suma(){
    console.log('Suma')
    this.unitario = this.datos[2];
    this.final= Number(this.final) + Number(this.unitario);
    this.acumulador = this.acumulador + 1;
  
  }

  resta(){
    if(this.final > this.datos[2]){
      this.unitario = this.datos[2];
      this.final= Number(this.final) - Number(this.unitario);
      this.acumulador = this.acumulador - 1;
    }
  }

}
