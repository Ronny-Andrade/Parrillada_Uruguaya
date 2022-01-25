import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsumidosPageRoutingModule } from './consumidos-routing.module';

import { ConsumidosPage } from './consumidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsumidosPageRoutingModule
  ],
  declarations: [ConsumidosPage]
})
export class ConsumidosPageModule {}
