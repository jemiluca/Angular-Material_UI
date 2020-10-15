import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/user';




@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {

  @Input() dataSource: User[];
  displayedColumns: string[] = ['id','email', 'name', 'phone', 'website'];
  constructor(
   
  ) { }

  ngOnInit() {
  }

}
