import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchViewComponent } from './views/search-view/search-view.component';
import { InventoryViewComponent } from './views/inventory-view/inventory-view.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix', //default redirectTo:'inventory/list'
    redirectTo: 'inventory'
  },
  { path: 'inventory', component: InventoryViewComponent },
  { path: 'search', component: SearchViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
