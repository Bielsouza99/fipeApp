import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrosAnosPage } from './carros-anos.page';

const routes: Routes = [
  {
    path: '',
    component: CarrosAnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosAnosPageRoutingModule {}
