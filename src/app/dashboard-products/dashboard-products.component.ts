import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard-products',
  templateUrl: './dashboard-products.component.html',
  styleUrls: ['./dashboard-products.component.css'],
})
export class DashboardProductsComponent {
  products: any;
  p = 1;
  errorMessage = '';

  async ngOnInit() {
    try {
      const response = await axios.get(
        'https://ecom.hoolioapps.com/api/products'
      );
      this.products = response.data.data.reverse();
      console.log(this.products.length);
    } catch (error) {
      this.errorMessage = 'An error occurred while fetching the data';
      console.log(error);
    }
  }
}
