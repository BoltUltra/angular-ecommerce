import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  // product: any;

  successMessage: boolean = false;
  success: string = '';
  error: string = '';
  errorMessage: boolean = false;

  product = {
    name: '',
    image: '',
    description: '',
    price: 0,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http
      .get(`https://ecom.hoolioapps.com/api/products/${id}`)
      .subscribe((product: any) => {
        this.product = product.product;
        console.log(this.product);
      });
  }

  onSubmit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', `Bearer ${token}`);
    this.http
      .patch(`https://ecom.hoolioapps.com/api/products/${id}`, this.product, {
        headers,
      })
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
