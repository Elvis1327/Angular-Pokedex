import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { PokemonVistaComponent } from './pages/pokemon-vista/pokemon-vista.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'listado', component: PokemonesComponent},
      {path: 'vista/:id', component: PokemonVistaComponent}
    ]
  },
  {
    path: '**',
    redirectTo: 'listado'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PokemonesRoutingModule {}
