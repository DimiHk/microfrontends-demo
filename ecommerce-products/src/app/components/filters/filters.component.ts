import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Category, ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecommerce-products-filters',
  standalone: true,
  imports: [RouterLink, CommonModule, AsyncPipe],
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  categories$!: Observable<Category[]>;
  routerCategory: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categories$ = this.productService.getCategories();
    this.categories$.subscribe((categories) =>
      categories.push({ id: 999, name: 'All' })
    );

    this.route.queryParamMap.subscribe((params) => {
      this.routerCategory = params.get('category');
    });
  }
}
