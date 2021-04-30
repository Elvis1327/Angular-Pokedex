import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemones } from '../interfaces/pokemones';

@Injectable({
  providedIn: 'root'
})

export class PokemonesService {
  private url: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient){}

  getPokemon(){
    const data: string = 'pokemon?limit=100'
    return this.http.get(`${this.url}/${data}`)
  }

  getOnePokemon(name: string){
    return this.http.get<Pokemones[]>(`${this.url}/pokemon/${name}`)
  };

  getPokemonById( id: string ){
    const data: string = this.url;
    return this.http.get<Pokemones>(`${data}/pokemon/${id}`)
  }
};
