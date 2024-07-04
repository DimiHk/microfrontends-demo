import { Component } from '@angular/core';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { OrderSummaryComponent } from "../order-summary/order-summary.component";

@Component({
    selector: 'ecommerce-cart-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    imports: [CartItemComponent, OrderSummaryComponent]
})
export class CartComponent {

}
