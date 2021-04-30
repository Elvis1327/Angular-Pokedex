import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './auth/guard/validar-token.guard';
import { HomeComponent } from './shared/home/home.component';


const routes: Routes = [
  {
    path: 'pokemones',
    loadChildren: () => import('./pokemones/pokemones.module')
    .then(p => p.PokemonesModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'autentication',
    loadChildren: () => import('./auth/auth.module')
    .then( a => a.AuthModule )
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
