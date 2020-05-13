import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotosAnosPageRoutingModule } from './motos-anos-routing.module';

import { MotosAnosPage } from './motos-anos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotosAnosPageRoutingModule
  ],
  declarations: [MotosAnosPage]
})
export class MotosAnosPageModule {}
