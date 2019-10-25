import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../src/assets/css/floating-labels.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  loginForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  login() {

    if (this.loginForm.invalid) {
      return;
  }

    this.authService.login(this.model).subscribe(next => {
      this.loading = true;
      this.alertify.success('Logged In Successfully');
    }, error => {
      console.log(error);
      this.error = error;
      this.loading = false;
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
