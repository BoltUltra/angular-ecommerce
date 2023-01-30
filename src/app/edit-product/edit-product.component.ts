// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import axios from 'axios';

// @Component({
//   selector: 'app-edit-product',
//   templateUrl: './edit-product.component.html',
//   styleUrls: ['./edit-product.component.css'],
// })
// export class EditProductComponent implements OnInit {
//   editForm: FormGroup;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.editForm = this.fb.group({
//       name: ['', Validators.required],
//       image: [null, Validators.required],
//       description: ['', Validators.required],
//       price: [0, Validators.required],
//     });
//   }

//   onSubmit() {
//     const formData = new FormData();
//     formData.append('name', this.editForm.get('name').value);
//     formData.append('image', this.editForm.get('image').value);
//     formData.append('description', this.editForm.get('description').value);
//     formData.append('price', this.editForm.get('price').value);

//     axios
//       .put(`https://ecom.hoolioapps.com/api/products/${productId}`, formData)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }
// }
