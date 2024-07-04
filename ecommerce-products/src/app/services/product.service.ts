import { Injectable } from '@angular/core';
//@ts-ignore
import { utils } from '@ecommerce/ecommerce-utils';
import { Observable, from } from 'rxjs';

export type Product ={
  id: number;
  title: string;
  price: number;
  description: string;
  category: { id: string; name: string; image: string };
  images: string[];
};

export type Category = {
  id: number;
  name: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private httpClient = utils.createHttpClient(
    'https://api.escuelajs.co/api/v1/'
  );

  getFilteredByCategory = (categoryId?: string): Observable<Product[]> => {
    return from(
      this.httpClient.get<Product[]>(
        categoryId !== '999' && categoryId !== undefined
          ? 'products/?categoryId=' + categoryId + '&offset=0&limit=10'
          : 'products?offset=0&limit=10'
      )
    );
  };

  getCategories = (): Observable<Category[]> => {
    return from(this.httpClient.get<Category[]>('categories?limit=6'));
  };
}
