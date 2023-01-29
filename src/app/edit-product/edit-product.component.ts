import { Component, OnInit, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  product: any; // Declare the property
  updateProduct() {
    const id = this.product.id;
    const data = {
      _method: 'PATCH',
      name: this.product.name,
      description: this.product.description,
      image: this.product.image,
      price: this.product.price,
    };

    axios
      .patch(`https://ecom.hoolioapps.com/api/products/${id}`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        withCredentials: true,
        auth: {
          username: 'Token',
          password: '<token>',
        },
      })
      .then((response) => {
        console.log(response.data);
        // handle success
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  }
}
