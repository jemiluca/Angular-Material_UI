import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output()
  onSearchClicked: EventEmitter<number> = new EventEmitter<number>();

  public id: number;
  constructor() { }

  ngOnInit() {
  }

  onSearch() {
    this.onSearchClicked.emit(this.id)
  }
}
