import { Injectable } from '@angular/core';
const NASDAQ = require('../../assets/company-lists/NASDAQcompanies.json');
const NYSE = require('../../assets/company-lists/NYSEcompanies.json');

@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor() { }

  getStockList() {
    return NYSE.concat(NASDAQ);
  }

  getStockData(stockSymbol) {
    console.log("not implemented");
  }

}
