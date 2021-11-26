import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @ViewChild(MatSidenav)
    sidenav!: MatSidenav;


  constructor(private observer: BreakpointObserver){

  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px']).subscribe((res)=>{
      if (res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode='side';
        this.sidenav.open();
      }
    });
  }

  title = 'projectoPU';
  showFiller = false;
  opciones = [
    {name: 'Dashboard', route: '', icon:'dashboard'},
    {name: 'Pedidos', route: '', icon:'assignment'},
    {name: 'Combos', route: 'combos', icon:'fastfood'},
    {name: 'Nuestros Platos', route: 'productos', icon:'food_bank'},
    {name: 'Reclamos y sugerencias', route: '', icon:'comment'},
    {name: 'Usuarios', route: 'usuarios', icon:'supervisor_account'},
    {name: 'Notificaciones Push', route: '', icon:'notifications'},
    {name: 'Administración', route: '', icon:'settings'},
  ]

}
