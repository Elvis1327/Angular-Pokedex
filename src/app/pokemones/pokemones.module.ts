import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { PokemonesComponent } from './pages/pokemones/pokemones.component';
import { PokemonesRoutingModule } from './pokemones-routing.module';
import { PokemonesUseComponent } from './components/pokemones-use/pokemones-use.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonVistaComponent } from './pages/pokemon-vista/pokemon-vista.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    PokemonesComponent,
    PokemonesUseComponent,
    PokemonVistaComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    PokemonesRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    HomeComponent,
    PokemonesComponent,
    PokemonVistaComponent
  ]
})

export class PokemonesModule { }
