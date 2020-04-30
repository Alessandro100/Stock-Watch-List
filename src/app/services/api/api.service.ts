import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(url: string){
    return new Promise((resolve, reject) =>{
      this.httpClient.get(url).toPromise().then(response =>{
        resolve(response);
      }, err =>{
        reject(err);
      })
    })
  }
}
