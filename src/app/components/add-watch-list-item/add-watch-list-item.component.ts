import { Component, OnInit } from '@angular/core';
import { add } from '../../actions/watch-list.actions';
import { selectWatchListItemWithSymbol } from '../../selectors/watch-list.selector';
import { WatchListItem } from 'src/app/interfaces/watch-list-item.interface';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/stock/stock.service';

@Component({
  selector: 'app-add-watch-list-item',
  templateUrl: './add-watch-list-item.component.html',
  styleUrls: ['./add-watch-list-item.component.scss']
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
    this.store.pipe(select(selectWatchListItemWithSymbol, { stockSymbol: stockSymbol })).subscribe((value: WatchListItem) =>{
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
