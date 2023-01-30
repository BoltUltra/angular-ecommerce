import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: any;

  constructor() {}

  ngOnInit() {
    // get token from local storage
    const token = localStorage.getItem('token');
    // add token to headers
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // make request to api
    axios
      .get('https://ecom.hoolioapps.com/api/products')
      .then((response) => {
        console.log(response.data);
        this.products = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteProduct(id: number) {
    const token = localStorage.getItem('token');
    axios
      .delete(`https://ecom.hoolioapps.com/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((response) => {
        console.log(response);
        // handle successful deletion
      })
      .catch((error) => {
        console.error(error);
        // handle error
      });
  }
}
