import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [
      { id: 1, name: 'prodotto1', descrizione: 'descrizione1'},
      { id: 2, name: 'prodotto2', descrizione: 'descrizione2'},
      { id: 3, name: 'prodotto3', descrizione: ''},
    ]
  }

  share(){
    alert("Sharing complete!");
  }

}
