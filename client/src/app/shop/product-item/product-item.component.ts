import { Component, Input, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: IProduct; // *** Get a property from the parent to child component. ***
  constructor(private basketservice: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket() {
    debugger;
    this.basketservice.addItemToBasket(this.product); // *** Used to add item while clicking the button. ***
  }

}
