import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhaoValorPageRoutingModule } from './caminhao-valor-routing.module';

import { CaminhaoValorPage } from './caminhao-valor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhaoValorPageRoutingModule
  ],
  declarations: [CaminhaoValorPage]
})
export class CaminhaoValorPageModule {}
