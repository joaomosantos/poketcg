import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() searchName: string;
  @Output() responseSearchName = new EventEmitter();

  searchEmit(): void {
    this.responseSearchName.emit(this.searchName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
