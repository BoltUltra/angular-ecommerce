import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product = {
    name: '',
    image: null,
    description: '',
    price: 0,
  };

  message = '';

  onFileChange(event: any) {
    this.product.image = event.target.files[0];
  }

  constructor(private router: Router) {}

  addProduct() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    if (this.product.image) {
      formData.append('image', this.product.image);
    }
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());

    axios
      .post('https://ecom.hoolioapps.com/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        console.log(response.data.message);
        this.message = response.data.message;
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  ngOnInit(): void {}
}
