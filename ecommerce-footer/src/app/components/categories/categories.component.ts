import { Component } from '@angular/core';

@Component({
  selector: 'ecommerce-footer-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
})
export class CategoriesComponent {
  categories = [
    {
      name: 'Company',
      links: ['About', 'Features', 'Works', 'Career'],
    },
    {
      name: 'Help',
      links: [
        'Customer Support',
        'Delivery Details',
        'Terms & Conditions',
        'Privacy Policy',
      ],
    },
    {
      name: 'FAQ',
      links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    },
    {
      name: 'Resources',
      links: [
        'Free Ebooks',
        'Development Tutorial',
        'How to - Blog',
        'Youtube Playlist',
      ],
    },
  ];
}
