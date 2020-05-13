import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'modelos/:marca',
    loadChildren: () => import('./modelos/modelos.module').then( m => m.ModelosPageModule)
  },
  {
    path: 'anos/:marca/:modelo',
    loadChildren: () => import('./anos/anos.module').then( m => m.AnosPageModule)
  },
  {
    path: 'valor/:marca/:modelo/:ano',
    loadChildren: () => import('./valor/valor.module').then( m => m.ValorPageModule)
  },
  {
    path: 'motos-modelos/:marca',
    loadChildren: () => import('./pages/motos-modelos/motos-modelos.module').then( m => m.MotosModelosPageModule)
  },
  {
    path: 'motos-anos/:marca/:modelo',
    loadChildren: () => import('./pages/motos-anos/motos-anos.module').then( m => m.MotosAnosPageModule)
  },
  {
    path: 'motos-valor/:marca/:modelo/:ano',
    loadChildren: () => import('./pages/motos-valor/motos-valor.module').then( m => m.MotosValorPageModule)
  },
  {
    path: 'caminhao-valor/:marca/:modelo/:ano',
    loadChildren: () => import('./pages/caminhao-valor/caminhao-valor.module').then( m => m.CaminhaoValorPageModule)
  },
  {
    path: 'caminhao-anos/:marca/:modelo',
    loadChildren: () => import('./pages/caminhao-anos/caminhao-anos.module').then( m => m.CaminhaoAnosPageModule)
  },
  {
    path: 'caminhao-modelos/:marca',
    loadChildren: () => import('./pages/caminhao-modelos/caminhao-modelos.module').then( m => m.CaminhaoModelosPageModule)
  },
  {
    path: 'carros-modelos/:marca',
    loadChildren: () => import('./pages/carros-modelos/carros-modelos.module').then( m => m.CarrosModelosPageModule)
  },
  {
    path: 'carros-anos/:marca/:modelo',
    loadChildren: () => import('./pages/carros-anos/carros-anos.module').then( m => m.CarrosAnosPageModule)
  },
  {
    path: 'carros-valor/:marca/:modelo/:ano',
    loadChildren: () => import('./pages/carros-valor/carros-valor.module').then( m => m.CarrosValorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
