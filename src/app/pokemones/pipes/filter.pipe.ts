import { Pipe, PipeTransform } from '@angular/core';
import { Pokemones } from '../interfaces/pokemones';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {

  transform(value: Pokemones[], text: string): Pokemones[]{
    if(text.length === 0){
      return value
    }else{
      return value.filter(poke =>{
        return poke.name.toUpperCase().includes(text.toUpperCase())
      })
    }
  }

}

