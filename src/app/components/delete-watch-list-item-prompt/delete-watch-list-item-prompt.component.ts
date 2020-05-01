import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { remove } from '../../actions/watch-list.actions';
import { WatchListItem } from 'src/app/interfaces/watch-list-item.interface';

export interface DialogData {
  watchListItem: WatchListItem;
}

@Component({
  selector: 'app-delete-watch-list-item-prompt',
  templateUrl: './delete-watch-list-item-prompt.component.html',
  styleUrls: ['./delete-watch-list-item-prompt.component.scss']
})
export class DeleteWatchListItemPromptComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteWatchListItemPromptComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private _snackBar: MatSnackBar,
              private store: Store<{ watchListItems: WatchListItem[]}>) {}

  ngOnInit(): void {
  }

  confirmDelete() {
    this.store.dispatch(remove({payload: {stockName: this.data.watchListItem.stockName}}));
    this._snackBar.open('Successfully removed ' + this.data.watchListItem.stockName + ' from your watchlist', 'removed', {
      duration: 4000,
    });
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
