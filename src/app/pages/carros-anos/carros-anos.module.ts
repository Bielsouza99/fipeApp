import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrosAnosPageRoutingModule } from './carros-anos-routing.module';

import { CarrosAnosPage } from './carros-anos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrosAnosPageRoutingModule
  ],
  declarations: [CarrosAnosPage]
})
export class CarrosAnosPageModule {}
