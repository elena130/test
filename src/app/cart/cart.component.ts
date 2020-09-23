import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../core/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  checkoutForm;

  constructor( 
    private cart:CartService,
    private form:FormBuilder, ) 
  { 
    this.checkoutForm = this.form.group({
      name:'',
      address:''
    });
  }

  onSubmit(customerData){
    this.cart.clearChart();
    this.checkoutForm.reset();
    console.warn('Your orders have been submitted', customerData);
  }

  ngOnInit(): void {
    this.items = this.cart.getItems();
  }

}
