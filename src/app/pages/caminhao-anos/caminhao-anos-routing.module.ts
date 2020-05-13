import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaminhaoAnosPage } from './caminhao-anos.page';

const routes: Routes = [
  {
    path: '',
    component: CaminhaoAnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaminhaoAnosPageRoutingModule {}
