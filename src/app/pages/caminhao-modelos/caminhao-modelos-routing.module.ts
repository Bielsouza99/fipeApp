import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhaoModelosPage } from './caminhao-modelos.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhaoModelosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhaoModelosPageRoutingModule {}
