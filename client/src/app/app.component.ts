import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket/basket.service';
import { IProduct } from './shared/models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Skinet Shopping';
  products: IProduct[];

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    const basketId = localStorage.getItem('basket_id'); // *** Used to get the details of the basket while starting thr Ng App. ***
    if (basketId) {
      this.basketService.getBasket(basketId).subscribe(() => {
        console.log('Initiated Basket');
      }, error => {
        console.log(error);
      })
    }
  }
}
