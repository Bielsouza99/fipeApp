import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaminhaoModelosPageRoutingModule } from './caminhao-modelos-routing.module';

import { CaminhaoModelosPage } from './caminhao-modelos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaminhaoModelosPageRoutingModule
  ],
  declarations: [CaminhaoModelosPage]
})
export class CaminhaoModelosPageModule {}
