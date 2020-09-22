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
      { id: 0, name: 'prodotto1', descrizione: 'descrizione1', prezzo: 800},
      { id: 1, name: 'prodotto2', descrizione: 'descrizione2', prezzo: 500},
      { id: 2, name: 'prodotto3', descrizione: '', prezzo: 200},
    ]
  }

  share(){
    window.alert("Sharing complete!");
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
