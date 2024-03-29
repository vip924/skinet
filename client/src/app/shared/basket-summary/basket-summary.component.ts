import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket, IBasketItem } from '../models/basket';

@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {

  basket$: Observable<IBasket>
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;
  
  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  incrementItemQuantity(item: IBasketItem){
    debugger;
    this.increment.emit(item);
  }

  decrementItemQuantity(item: IBasketItem){
    this.decrement.emit(item);
  }

  removeBasketItem(item: IBasketItem){
    debugger;
    this.remove.emit(item);
  }

}
