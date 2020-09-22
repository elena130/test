import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
  declarations: [ProductListComponent, ProductAlertComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ ProductListComponent, ProductAlertComponent ]
})
export class ProductListModule {}
