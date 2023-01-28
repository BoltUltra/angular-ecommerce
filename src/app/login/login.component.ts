import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  errorMessage: string = '';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // onSubmit() {
  //   axios
  //     .post('https://ecom.hoolioapps.com/api/login', this.loginForm.value)
  //     .then((response) => {
  //       // check the response for a successful login
  //       if (response.data.success) {
  //         // navigate to the dashboard component
  //         console.log('success');
  //         this.router.navigate(['/dashboard']);
  //       } else {
  //         // display an error message
  //         this.errorMessage = response.data.message;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  onSubmit() {
    // Send the login request to the API
    axios
      .post('https://ecom.hoolioapps.com/api/login', this.loginForm.value)
      .then((response) => {
        // handle success
        // console.log('success');
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        // handle error
        this.errorMessage = error.response.data.message;
      });
  }
}
