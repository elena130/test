import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
  declarations: [ProductListComponent, ProductAlertComponent],
  imports: [
    CommonModule
  ],
  exports:[ ProductListComponent, ProductAlertComponent ]
})
export class ProductListModule {}
