import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
