import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { ProductListComponent } from './product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';

@NgModule({
  declarations: [ProductListComponent, ProductAlertComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatCardModule
  ],
  exports:[ ProductListComponent, ProductAlertComponent ]
})
export class ProductListModule {}
