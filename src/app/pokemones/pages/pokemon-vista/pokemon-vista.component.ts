import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PokemonesService } from '../../services/pokemones.service';
import { switchMap } from 'rxjs/operators';
import { Pokemones } from '../../interfaces/pokemones';

@Component({
  selector: 'app-pokemon-vista',
  templateUrl: './pokemon-vista.component.html',
  styleUrls: ['./pokemon-vista.component.css']
})
export class PokemonVistaComponent implements OnInit {

  public pokemon!: Pokemones;

  constructor(private activatedRoute: ActivatedRoute,
              private PokemonesService: PokemonesService) { }

  ngOnInit() {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) =>  this.PokemonesService.getPokemonById(id))
    ).subscribe((res)=>{
      this.pokemon = res;
      console.log(this.pokemon)
    })
  }

}
