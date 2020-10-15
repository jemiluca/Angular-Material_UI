import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { InventoryService } from 'src/app/services/Inventory.service';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  public users: User[] 

  constructor(private invSer: InventoryService) { }

  ngOnInit(): void {

  }

  onSearchClicked(id: number) {
    console.log('search clicked ',id)
    this.invSer.getUser(id).subscribe(urs => {
      console.log(urs);
      this.users = [urs]
    })
  }

}