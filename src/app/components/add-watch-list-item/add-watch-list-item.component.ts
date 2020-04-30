import { Component, OnInit } from '@angular/core';
import { add } from '../../actions/watch-list.actions';
import { WatchListItem } from 'src/app/interfaces/watch-list-item.interface';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-watch-list-item',
  templateUrl: './add-watch-list-item.component.html',
  styleUrls: ['./add-watch-list-item.component.scss']
})
export class AddWatchListItemComponent implements OnInit {

  constructor(public router: Router,
              private _snackBar: MatSnackBar,
              private store: Store<{ watchListItems: WatchListItem[]}>) { }

  ngOnInit(): void {
  }

  saveNewWatchListItem() {
    const test: WatchListItem = {
      stockName: 'AAPL',
      note: 'this is a test note'
    }
    this.store.dispatch(add({payload: {watchListItem: test}}));
    this.openSnackBar('Stock Succesfully Added', 'added')
    this.router.navigateByUrl('/home');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
