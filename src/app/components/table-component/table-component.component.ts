import { Component, OnInit } from '@angular/core';


export interface Users {
  name: string;
  id: number;
  email: string;
  phone: string;
  website: string;
}

const ELEMENT_DATA: Users[] = [
  {email: "test@.com", id: 1, name: "hassen", phone: '700-209-2345', website: 'www.google.com'},
  {email: "sswe@.com", id: 2, name: "jemil", phone: '345-209-2345', website: 'www.xxx.com'}
]
@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'name', 'phone', 'website'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
