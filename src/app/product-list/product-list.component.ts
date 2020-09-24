import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';

import { ProductService } from '../core/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products;

  constructor( private productService:ProductService ) { }

  ngOnInit(): void {
     this.products = this.productService.getProducts();
  }

  share(){
    window.alert("Sharing complete!");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
