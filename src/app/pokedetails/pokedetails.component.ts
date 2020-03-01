import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokecardsService } from '../pokecards/pokecards.service';
import { Card } from '../pokecards/card/card.model';

@Component({
  selector: 'app-pokedetails',
  templateUrl: './pokedetails.component.html',
  styleUrls: ['./pokedetails.component.scss']
})
export class PokedetailsComponent implements OnInit {

  card: Card;

  constructor(private pokecardsService: PokecardsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pokecardsService
      .detailById(this.route.snapshot.params['id'])
      .subscribe(card => this.card = card)
  }

}
