import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];

  addToChart( product ){
    this.items.push(product);
  }


  
  getItems(){
    return this.items;
  }

  clearChart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices(){
    this.http.get('assets/shipping.json');
  }

  constructor( private http:HttpClient) { }
}
