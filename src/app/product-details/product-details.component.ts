import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;
  products:any[] = [];

  constructor(  private route: ActivatedRoute, 
                private cartService:CartService ) { }

  addToCart( item:any ){
    this.cartService.addToChart(item);
    window.alert("Your item ha been added to the chart");
  }

  ngOnInit(): void {
    this.products = [
      { id: 0, name: 'prodotto1', descrizione: 'descrizione1', prezzo: 800},
      { id: 1, name: 'prodotto2', descrizione: 'descrizione2', prezzo: 500},
      { id: 2, name: 'prodotto3', descrizione: '', prezzo: 200},
    ]

    this.route.paramMap.subscribe(params => {
      this.product = this.products[+params.get('id')];
    });
  }

}
