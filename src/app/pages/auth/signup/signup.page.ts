import { Component, OnInit, effect } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private router: Router,
    private authSrv: AuthService,
    public utilSrv: UtilityService
  ) { }



  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  e = effect(() => {console.log(this.utilSrv.loading())})

  ngOnInit() {
    // effect(() => {console.log(this.utilSrv.loading())})
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return
    }

    let data: RegisterData = {
      name: this.signupForm.controls.name.value!,
      email:  this.signupForm.controls.email.value!,
      password:  this.signupForm.controls.password.value!,
    }

    this.authSrv.register(data);
  }

  onClick() {

  }

  goToLogin() {
    this.router.navigateByUrl("/login")
  }

}
