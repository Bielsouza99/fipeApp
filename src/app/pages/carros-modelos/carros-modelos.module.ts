import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosModelosPageRoutingModule } from './carros-modelos-routing.module';

import { CarrosModelosPage } from './carros-modelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosModelosPageRoutingModule
  ],
  declarations: [CarrosModelosPage]
})
export class CarrosModelosPageModule {}
