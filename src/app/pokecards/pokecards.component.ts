import { Component, OnInit } from '@angular/core';
import { Card } from './card/card.model';
import { PokecardsService } from './pokecards.service';

@Component({
  selector: 'app-pokecards',
  templateUrl: './pokecards.component.html',
  styleUrls: ['./pokecards.component.scss']
})
export class PokecardsComponent implements OnInit {

  cards: Card[];

  constructor(private pokecardsService: PokecardsService) { }

  ngOnInit(): void {
    this.pokecardsService
      .cards()
      .subscribe(cards => this.cards = cards);
  }

}
