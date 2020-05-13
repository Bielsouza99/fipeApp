import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotosAnosPage } from './motos-anos.page';

const routes: Routes = [
  {
    path: '',
    component: MotosAnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotosAnosPageRoutingModule {}
