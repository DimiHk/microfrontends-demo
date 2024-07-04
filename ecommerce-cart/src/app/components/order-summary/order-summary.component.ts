import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'ecommerce-cart-order-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-summary.component.html',
})
export class OrderSummaryComponent {
  cartService: CartService;

  constructor(private service: CartService) {
    this.cartService = this.service;
  }

  
}
