import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ordenarNome'})
export class OrdenarNome implements PipeTransform {
  transform(array: any[]) {
    if (array !== undefined)
    return array.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    return array;
  }
}