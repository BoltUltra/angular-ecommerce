import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    password_confirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    axios
      .post('https://ecom.hoolioapps.com/api/register', this.form.value)
      .then((response) => {
        console.log(response);
        this.successMessage = 'Registration successful!';
        this.router.navigate(['/login']);
        this.form.reset();
      })
      .catch((error) => {
        this.errorMessage = 'Registration failed. Please try again.';
      });
  }
}
