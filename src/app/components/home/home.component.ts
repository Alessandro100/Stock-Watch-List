import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WatchListItem } from 'src/app/interfaces/watch-list-item.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  watchListItems$: Observable<WatchListItem[]>;

  constructor(private store: Store<{ watchListItems: WatchListItem[]}>) { 
    this.watchListItems$ = store.pipe(select('watchListItems'));
  }

  ngOnInit(): void {
  }

}
