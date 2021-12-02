import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HeaderAtrasComponent } from './header-atras/header-atras.component';




@NgModule({
  declarations: [
    HeaderAtrasComponent,
  ],
  exports:[
    HeaderAtrasComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentesModule { }