import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsComponent } from './components/products/products.component';

@Component({
  selector: 'ecommerce-products-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    FiltersComponent,
    ProductsComponent,
  ],
})
export class AppComponent {}
