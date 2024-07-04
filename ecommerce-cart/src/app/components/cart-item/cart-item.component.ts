import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'ecommerce-cart-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  cartService: CartService;

  constructor(private service: CartService) {
    this.cartService = this.service;
  }
}
