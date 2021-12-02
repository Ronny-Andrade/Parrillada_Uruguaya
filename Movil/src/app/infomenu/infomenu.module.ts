import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfomenuPageRoutingModule } from './infomenu-routing.module';

import { InfomenuPage } from './infomenu.page';
import { ComponentesModule } from '../componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfomenuPageRoutingModule,
    ComponentesModule
  ],
  declarations: [InfomenuPage]
})
export class InfomenuPageModule {}
