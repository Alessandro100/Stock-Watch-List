import {Component, Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-delete-watch-list-item-prompt',
  templateUrl: './delete-watch-list-item-prompt.component.html',
  styleUrls: ['./delete-watch-list-item-prompt.component.scss']
})
export class DeleteWatchListItemPromptComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteWatchListItemPromptComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
