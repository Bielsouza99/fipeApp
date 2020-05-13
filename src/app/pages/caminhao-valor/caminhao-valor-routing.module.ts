import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhaoValorPage } from './caminhao-valor.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhaoValorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhaoValorPageRoutingModule {}
