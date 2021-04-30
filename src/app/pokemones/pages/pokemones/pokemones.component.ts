import { Component, OnInit } from '@angular/core';
import { Pokemones } from '../../interfaces/pokemones';
import { PokemonesService } from '../../services/pokemones.service';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styles: [
    `

    `
  ]
})
export class PokemonesComponent implements OnInit {

  pokemones: Pokemones[] = []

  constructor(private pokemonesService: PokemonesService) {
    this.getAllPokemons()
   }

  ngOnInit() {

  }

  getAllPokemons(){
    this.pokemonesService.getPokemon().subscribe((resp: any)=>{
      resp.results.map((item: any)=>{
        this.pokemonesService.getOnePokemon(item.name)
        .subscribe((res: any)=>{
          this.pokemones.push(res);
        });
      });
    });
  };

}
