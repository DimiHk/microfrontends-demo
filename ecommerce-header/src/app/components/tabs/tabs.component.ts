import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//@ts-ignore
import { utils } from '@ecommerce/ecommerce-utils';

@Component({
  selector: 'ecommerce-header-tabs',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  navigationTabs = [
    { href: '/cart', name: 'Cart', icon: 'fa-solid fa-cart-shopping fa-lg' },
    { href: '/', name: 'House', icon: 'fa-solid fa-house fa-lg' },
  ];

  getCartTotalItems() {
    return utils.cartStore.getCartTotalItems();
  }
}
