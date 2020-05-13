import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosModelosPage } from './carros-modelos.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosModelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosModelosPageRoutingModule {}
