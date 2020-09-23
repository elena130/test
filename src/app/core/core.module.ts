import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';


@NgModule({
  declarations: [ CartService],
  imports: [
    CommonModule
  ],
  exports:[CartService]
})
export class CoreModule { }
