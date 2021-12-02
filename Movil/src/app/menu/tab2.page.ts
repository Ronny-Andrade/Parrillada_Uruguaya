import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';


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

  constructor(private menu:MenuService) {}
  ngOnInit() {
    this.alimentos = this.menu.getMenu();
    this.tipoProducto = this.menu.getTipoProducto();
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
