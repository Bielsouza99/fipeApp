import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotosValorPage } from './motos-valor.page';

const routes: Routes = [
  {
    path: '',
    component: MotosValorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotosValorPageRoutingModule {}
