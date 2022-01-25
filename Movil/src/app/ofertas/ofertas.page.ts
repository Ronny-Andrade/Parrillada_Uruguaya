import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../services/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  ofertas : any[];

  constructor(private oferta:OfertaService) { }

  ngOnInit() {
    this.obtenerOfertas();
  }

  obtenerOfertas(){
    this.oferta.getOfertas().subscribe(data=>{
      this.ofertas=data;
    })
  }

}
