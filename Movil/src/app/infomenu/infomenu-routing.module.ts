import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfomenuPage } from './infomenu.page';

const routes: Routes = [
  {
    path: '',
    component: InfomenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfomenuPageRoutingModule {}
