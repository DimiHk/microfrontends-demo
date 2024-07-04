import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FreeDiscountComponent } from './components/free-discount/free-discount.component';
import { LogoComponent } from './components/logo/logo.component';
import { TabsComponent } from './components/tabs/tabs.component';

@Component({
  selector: 'ecommerce-header-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    FreeDiscountComponent,
    LogoComponent,
    TabsComponent,
  ],
})
export class AppComponent {}
