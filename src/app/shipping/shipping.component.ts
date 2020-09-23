import { Component, OnInit } from '@angular/core';

import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor( private cart:CartService ) { }

  ngOnInit(): void {
    this.shippingCosts = this.cart.getShippingPrices();
    console.log(this.shippingCosts);
  }

}
