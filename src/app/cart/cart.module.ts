import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CartComponent } from './cart.component';

@NgModule({
  declarations: [ CartComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[ CartComponent ]
})
export class CartModule { }
