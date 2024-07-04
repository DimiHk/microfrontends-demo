import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AllRightsReservedComponent } from './components/all-rights-reserved/all-rights-reserved.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LogoComponent } from './components/logo/logo.component';

@Component({
  selector: 'ecommerce-footer-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    AllRightsReservedComponent,
    CategoriesComponent,
    LogoComponent,
  ],
})
export class AppComponent {}
