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
  errorMessage: boolean = false;
  loginForm: FormGroup;
  successMessage: boolean = false;
  error: string = '';
  isLoading: boolean = false;
  inputText: string = '';

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
        console.log(response.data.message);
        console.log(response.data.data.token);
        localStorage.setItem('token', response.data.data.token);
        this.successMessage = true;
        setTimeout(() => {
          this.successMessage = false;
        }, 2000);
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 1000);
      })
      .catch((error) => {
        // handle error
        this.error = error.response.data.message;
        console.log(error.response.data.message);
        this.errorMessage = true;
        setTimeout(() => {
          this.errorMessage = false;
        }, 2000);
      });

    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
