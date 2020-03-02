import {Pipe, PipeTransform} from '@angular/core';
import { Card } from './card/card.model';

@Pipe({name: 'search'})
export class Search implements PipeTransform {
  transform(cards: Card[], searchName: string) : Card[] {
    if (!cards || !searchName) 
    return cards;
    return cards.filter(card => card.name.toLocaleLowerCase().indexOf(searchName.toLocaleLowerCase()) !== -1);
  }
}