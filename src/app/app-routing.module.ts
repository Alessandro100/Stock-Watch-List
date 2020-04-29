import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddWatchListItemComponent } from './add-watch-list-item/add-watch-list-item.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-watch-list-item', component: AddWatchListItemComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
