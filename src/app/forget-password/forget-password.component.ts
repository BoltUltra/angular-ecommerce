import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  email: string = '';
  success = false;
  error = '';

  submit() {
    axios
      .post('https://ecom.hoolioapps.com/api/forgotpassword', {
        email: this.email,
      })
      .then((response) => {
        setTimeout(() => {
          this.success = true;
        }, 2000);
      })
      .catch((error) => {
        setTimeout(() => {
          this.error = error.response.data.message;
        }, 2000);
      });
  }
}
