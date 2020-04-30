import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {
  searchValue = '';
  output = [];
  fuse = new Fuse(this.stockService.getStockList(), {
    keys: ['Name', 'Symbol']
  })

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

  onKeydownEvent() {
    this.output = this.fuse.search(this.searchValue);
  }

  hideOutput() {
    this.output = [];
  }

  goToStock(stock) {
    console.log("this is the stock");
    console.log(stock);
  }

}
