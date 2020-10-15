import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { InventoryService } from 'src/app/services/Inventory.service';

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.css']
})
export class InventoryViewComponent implements OnInit {

  public users: User[] 

  constructor(private invSer: InventoryService) { }

  ngOnInit(): void {
    this.userList();
  } 
  userList() {
    this.invSer.getUsers().subscribe(urs => {
      this.users = urs;
    });
  }
}