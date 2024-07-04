import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent } from "./components/cart/cart.component";

@Component({
    selector: 'ecommerce-cart-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [RouterOutlet, CommonModule, CartComponent]
})
export class AppComponent {
  
}
