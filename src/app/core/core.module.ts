import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule
  ],
  exports:[],
  providers:[CartService]
})
export class CoreModule { }
