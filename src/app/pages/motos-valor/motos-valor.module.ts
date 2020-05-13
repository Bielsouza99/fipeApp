import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotosValorPageRoutingModule } from './motos-valor-routing.module';

import { MotosValorPage } from './motos-valor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotosValorPageRoutingModule
  ],
  declarations: [MotosValorPage]
})
export class MotosValorPageModule {}
