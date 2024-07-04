import { Injectable } from '@angular/core';
//@ts-ignore
import { utils } from '@ecommerce/ecommerce-utils';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart = utils.cartStore.getCart();

  decrementItem(id: number) {
    utils.cartStore.decrementItem(id);
    this.cart = utils.cartStore.getCart();
  }

  addItem(item: any) {
    utils.cartStore.addItem(item);
    this.cart = utils.cartStore.getCart();
  }

  removeItem(id: number) {
    utils.cartStore.removeItem(id);
    this.cart = utils.cartStore.getCart();
  }

  getSubTotalPrice() {
    let subTotal = 0;
    this.cart.forEach((item: any) => {
      subTotal += item.quantity * item.price;
    });
    return subTotal;
  }

  getTotalPrice() {
    let total = 0;
    const subTotal = this.getSubTotalPrice();
    total = subTotal - 50 + 15;
    return total;
  }
}
