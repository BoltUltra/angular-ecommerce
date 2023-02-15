import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: any;
  successMessage: boolean = false;

  constructor(private route: Router) {}

  ngOnInit() {
    // get token from local storage
    const token = localStorage.getItem('token');
    // add token to headers
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // make request to api
    axios
      .get('https://ecom.hoolioapps.com/api/products')
      .then((response) => {
        // console.log(response.data.data);
        this.products = response.data.data.reverse();
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
        // handle successful deletion
        // console.log(response.data.message);
        this.successMessage = true;
        setTimeout(() => {
          this.successMessage = false;
        }, 2000);
        location.reload();
      })
      .catch((error) => {
        console.error(error);
        // handle error
      });
  }

  edit(id: number): void {
    this.route.navigate(['/edit', id]);
  }
}
animations: [
  trigger('fadeOut', [
    transition(':leave', [
      style({ opacity: 1 }),
      animate(2000, style({ opacity: 0 })),
    ]),
  ]),
];
