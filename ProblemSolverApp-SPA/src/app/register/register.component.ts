import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../src/assets/css/floating-labels.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged In Successfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !! token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged Out');
  }
}
