import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotosModelosPage } from './motos-modelos.page';

const routes: Routes = [
  {
    path: '',
    component: MotosModelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotosModelosPageRoutingModule {}
