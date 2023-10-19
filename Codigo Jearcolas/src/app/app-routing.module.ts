import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { LoginPage } from './login/login.page';
import { RecuperarPage } from './recuperar/recuperar.page';
import { NotFoundGuard } from './not-found404/not-found.guard';
import { NotFound404Page } from './not-found404/not-found404.page';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'not-found404',
    loadChildren: () => import('./not-found404/not-found404.module').then( m => m.NotFound404PageModule)
  },
  {
    path: 'not-found404',
    loadChildren: () => import('./not-found404/not-found404.module').then(m => m.NotFound404PageModule)
  },
  {
    path: '**', // Cualquier ruta no manejada por las rutas anteriores
    redirectTo: 'not-found404'
  }
   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
