import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosValorPage } from './carros-valor.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosValorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosValorPageRoutingModule {}
