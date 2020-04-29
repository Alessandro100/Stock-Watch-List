import { Component, OnInit } from '@angular/core';
import { DeleteWatchListItemPromptComponent } from '../delete-watch-list-item-prompt/delete-watch-list-item-prompt.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.scss']
})
export class WatchListItemComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  confirmDeletePrompt() {
    const dialogRef = this.dialog.open(DeleteWatchListItemPromptComponent, {
      width: '250px',
      data: {name: 'TSLA'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
