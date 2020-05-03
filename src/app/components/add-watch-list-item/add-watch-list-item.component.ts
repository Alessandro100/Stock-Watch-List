import { Component, OnInit } from '@angular/core';
import { add, edit } from '../../actions/watch-list.actions';
import { selectWatchListItemWithSymbol } from '../../selectors/watch-list.selector';
import { WatchListItem } from 'src/app/interfaces/watch-list-item.interface';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/stock/stock.service';
import { trigger, style, animate, transition, state } from '@angular/animations';

@Component({
  selector: 'app-add-watch-list-item',
  templateUrl: './add-watch-list-item.component.html',
  styleUrls: ['./add-watch-list-item.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({opacity: 0}),
          animate('600ms', style({opacity: 1}))
        ]),
        transition(':leave', [
          style({opacity: 1}),
          animate('500ms', style({opacity: 0}))
        ])
      ]
    )
  ]
})
export class AddWatchListItemComponent implements OnInit {
  stockInformation: any;
  existingWatchListStock: WatchListItem = null;
  stockNote = '';

  constructor(public router: Router,
              private route: ActivatedRoute,
              private _snackBar: MatSnackBar,
              private stockService: StockService,
              private store: Store<{ watchListItems: WatchListItem[]}>) { }

  ngOnInit() {
    const stockSymbol = this.route.snapshot.paramMap.get('stockSymbol');
    this.getStockInformation(stockSymbol);

    //checks to see if the current stock is in the watchlist
    this.store.pipe(select(selectWatchListItemWithSymbol, { stockSymbol: stockSymbol })).subscribe((value: WatchListItem) => {
      this.existingWatchListStock = value;
      if(this.existingWatchListStock) {
        this.stockNote = this.existingWatchListStock.note;
      }
    })
  }

  getStockInformation(stockSymbol) {
    this.stockService.getStockData(stockSymbol).then(stockInformation => {
      this.stockInformation = stockInformation;
    }, err =>{
      console.log(err);
    })
  }

  updateStockItem() {
    //clones the existingWatchListStock into a new object to update it
    let updatedWatchListItem = Object.assign({}, this.existingWatchListStock);
    updatedWatchListItem.note = this.stockNote;
    this.store.dispatch(edit({payload: {watchListItem: updatedWatchListItem}}));
    this.openSnackBar('Stock Succesfully Updated', 'updated')
    this.router.navigateByUrl('/home');
  }

  saveNewWatchListItem() {
    const watchListItem: WatchListItem = {
      stockName: this.stockInformation.companyName,
      stockSymbol: this.stockInformation.symbol,
      note: this.stockNote,
    }
    this.store.dispatch(add({payload: {watchListItem: watchListItem}}));
    this.openSnackBar('Stock Succesfully Added', 'added')
    this.router.navigateByUrl('/home');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
