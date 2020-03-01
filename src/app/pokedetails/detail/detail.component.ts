import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/pokecards/card/card.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
