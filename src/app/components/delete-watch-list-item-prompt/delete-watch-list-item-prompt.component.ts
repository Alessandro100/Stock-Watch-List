import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
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
              private store: Store<{ watchListItems: WatchListItem[]}>) {}

  ngOnInit(): void {
  }

  confirmDelete() {
    //need to figure out how data is passed
    //this.store.dispatch(remove());
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
