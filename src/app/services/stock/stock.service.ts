import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

const NASDAQ = require('../../../assets/company-lists/NASDAQcompanies.json');
const NYSE = require('../../../assets/company-lists/NYSEcompanies.json');

@Injectable({
  providedIn: 'root'
})

export class StockService {

  constructor(private api:ApiService) { }

  getStockList() {
    return NYSE.concat(NASDAQ);
  }

  getStockData(stockSymbol) {
    return new Promise((resolve, reject) =>{
      const url = 'https://sandbox.iexapis.com/stable/stock/'+stockSymbol+'/quote?token=Tpk_6d7ce216f5fe43ddb3de9ef3259bb550'
      this.api.get(url).then(stockInfo =>{
        resolve(stockInfo);
      }, err =>{
        reject(err);
      })
    })
  }
}
