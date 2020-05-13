import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosValorPageRoutingModule } from './carros-valor-routing.module';

import { CarrosValorPage } from './carros-valor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosValorPageRoutingModule
  ],
  declarations: [CarrosValorPage]
})
export class CarrosValorPageModule {}
