import { Component, OnInit, Input } from '@angular/core';
import { DeleteWatchListItemPromptComponent } from '../delete-watch-list-item-prompt/delete-watch-list-item-prompt.component';
import { MatDialog } from '@angular/material/dialog';
import { WatchListItem } from 'src/app/interfaces/watch-list-item.interface';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.scss']
})
export class WatchListItemComponent implements OnInit {
  @Input() watchListItem: WatchListItem;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  confirmDeletePrompt() {
    const dialogRef = this.dialog.open(DeleteWatchListItemPromptComponent, {
      width: '250px',
      data: {watchListItem: this.watchListItem}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
