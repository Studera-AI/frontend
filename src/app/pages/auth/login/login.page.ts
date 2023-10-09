import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  theme = 'lark';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private authSrv: AuthService,
    public utilSrv: UtilityService
  ) {}

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    let data: LoginData = {
      email: this.loginForm.controls.email.value!,
      password: this.loginForm.controls.password.value!,
    };

    this.authSrv.login(data);
  }

  onClick() {}

  goToSignup() {
    this.router.navigateByUrl('/signup');
  }
}
