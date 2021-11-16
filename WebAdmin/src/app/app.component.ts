import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //logica para hacer el sidebar responsive 
  
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
    {name: 'Dashboard', route: '', },
    {name: 'Pedidos', route: '', },
    {name: 'Combos', route: 'combos', },
    {name: 'Nuestros Platos', route: 'productos', },
    {name: 'Reclamos y sugerencias', route: '', },
    {name: 'Usuarios', route: 'usuarios', },
    {name: 'Notificaciones Push', route: '', },
    {name: 'Administración', route: '', },
  ]

}
