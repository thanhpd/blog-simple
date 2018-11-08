import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { UserCredentials } from '../_models';
import { Router } from '@angular/router';

@Component({
  selector: 'blog-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userCredentials: UserCredentials;
  isLoading = false;

  validationMessages = {
    username: {
      required: 'Username is required.',
      notFound: 'User is not existed in the system.'
    },
    password: {
      required: 'Password is required.'
    },
    form: {
      badCredentials: 'Your username and password is not correct.',
      other: 'Unknown error has occured, please contact Administrator.'
    }
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const login = this.authService.onLogin(this.loginForm.value);
      if (login) {
        this.router.navigate(['/']);
      } else {
        this.loginForm.setErrors({ badCredentials: true });
      }
    }
  }

}
