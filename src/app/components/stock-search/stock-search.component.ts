import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock/stock.service';
import { Router } from '@angular/router';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-stock-search',
  templateUrl: './stock-search.component.html',
  styleUrls: ['./stock-search.component.scss']
})
export class StockSearchComponent implements OnInit {
  searchValue = '';
  output = [];
  fuse;

  constructor(private stockService: StockService, private router: Router) { 
    this.fuse = new Fuse(this.stockService.getStockList(), {
      keys: ['Name', 'Symbol']
    })
  }

  ngOnInit(): void {
  }

  onKeydownEvent() {
    this.output = this.fuse.search(this.searchValue);
  }

  hideOutput() {
    setTimeout(_=>{
      this.output = [];
    }, 250)
  }

  goToStock(stock) {
    this.router.navigate(['/add-watch-list-item', stock.Symbol]);
  }

}
