import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumidosPage } from './consumidos.page';

const routes: Routes = [
  {
    path: '',
    component: ConsumidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsumidosPageRoutingModule {}
