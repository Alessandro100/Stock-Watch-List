import { Component, OnInit, Input } from '@angular/core';
import { DeleteWatchListItemPromptComponent } from '../delete-watch-list-item-prompt/delete-watch-list-item-prompt.component';
import { MatDialog } from '@angular/material/dialog';
import { WatchListItem } from 'src/app/interfaces/watch-list-item.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watch-list-item',
  templateUrl: './watch-list-item.component.html',
  styleUrls: ['./watch-list-item.component.scss']
})
export class WatchListItemComponent implements OnInit {
  @Input() watchListItem: WatchListItem;

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  editWatchListStock() {
    this.router.navigate(['/add-watch-list-item', this.watchListItem.stockSymbol]);
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
