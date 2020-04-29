import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { WatchListItemComponent } from './watch-list-item/watch-list-item.component';
import { AddWatchListItemComponent } from './add-watch-list-item/add-watch-list-item.component';
import { DeleteWatchListItemPromptComponent } from './delete-watch-list-item-prompt/delete-watch-list-item-prompt.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StockSearchComponent,
    WatchListItemComponent,
    AddWatchListItemComponent,
    DeleteWatchListItemPromptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatButtonModule,
    MatDialogModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
