import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:any[];

  addToChart( product:any ){
    this.items.push(product);
  }

  getItems():any[]{
    return this.items;
  }

  clearChart():any[]{
    this.items = [];
    return this.items;
  }

  constructor() { }
}
