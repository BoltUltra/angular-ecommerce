import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products: any;
  p = 1;
  errorMessage = '';

  async ngOnInit() {
    try {
      const response = await axios.get(
        'https://ecom.hoolioapps.com/api/products'
      );
      this.products = response.data.data;
      console.log(this.products.length);
    } catch (error) {
      this.errorMessage = 'An error occurred while fetching the data';
      console.log(error);
    }
  }
}
