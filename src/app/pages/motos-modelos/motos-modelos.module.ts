import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotosModelosPageRoutingModule } from './motos-modelos-routing.module';

import { MotosModelosPage } from './motos-modelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotosModelosPageRoutingModule
  ],
  declarations: [MotosModelosPage]
})
export class MotosModelosPageModule {}
