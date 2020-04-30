import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { watchListReducer } from './reducers/watch-list.reducer';
import { HomeComponent } from './components/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { StockSearchComponent } from './components/stock-search/stock-search.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WatchListItemComponent } from './components/watch-list-item/watch-list-item.component';
import { AddWatchListItemComponent } from './components/add-watch-list-item/add-watch-list-item.component';
import { DeleteWatchListItemPromptComponent } from './components/delete-watch-list-item-prompt/delete-watch-list-item-prompt.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; 

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
    MatSnackBarModule,
    StoreModule.forRoot({watchListItems: watchListReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
