import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
//@ts-ignore
import { utils } from '@ecommerce/ecommerce-utils';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'ecommerce-products-products',
  standalone: true,
  imports: [RouterLink, CommonModule, AsyncPipe],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products$!: Observable<Product[]>;
  routerCategory: string | null = null;
  addedToCart: Set<number> = new Set();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.addedToCart = new Set(utils.cartStore.getCartIds());

    this.route.queryParamMap.subscribe((params) => {
      this.routerCategory = params.get('category');
      this.products$ = this.productService.getFilteredByCategory(
        this.routerCategory ? this.routerCategory : undefined
      );
    });
  }

  addItem(item: Product) {
    utils.cartStore.addItem(item);
    this.addedToCart.add(item.id);
  }

  isAddedToCart(itemId: number): boolean {
    return this.addedToCart.has(itemId);
  }
}
