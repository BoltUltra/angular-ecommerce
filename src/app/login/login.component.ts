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
  successMessage: string = '';

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

  onSubmit() {
    // Send the login request to the API
    axios
      .post('https://ecom.hoolioapps.com/api/login', this.loginForm.value)
      .then((response) => {
        // handle success
        // console.log('success');
        console.log(response);
        console.log(response.data.data.token);
        this.successMessage = 'Login successful!';
        localStorage.setItem('token', response.data.data.token);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      })
      .catch((error) => {
        // handle error
        this.errorMessage = error.response.data.message;
      });
  }
}
