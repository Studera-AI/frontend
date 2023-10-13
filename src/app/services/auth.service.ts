import { Injectable, signal } from '@angular/core';
import { LoginData, RegisterData } from '../interfaces/auth';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';
import { ClientService } from './client.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.baseUrl;
  isAuthenticated = signal(false);
  private tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private utilSrv: UtilityService,
    private clientSrv: ClientService
  ) {}

  register(data: RegisterData) {
    this.utilSrv.signupLoading.set(true);
    console.log('Registering');
    this.httpClient.post(`${this.baseUrl}/signup`, data).subscribe({
      next: (result: any) => {
        console.log('Registered');
        const now = new Date();
        const expirationDate = new Date(now.getTime() + 1000 * 60 * 60 * 24);
        console.log(result);
        this.saveSession(
          result.user.email,
          result.user.name,
          result.user.token,
          result.user.id,
          expirationDate
        );
        this.isAuthenticated.set(true);
        this.router.navigateByUrl('/search');
      },
      error: (e) => {
        console.log(e);
        this.utilSrv.signupLoading.set(false);
      },
      complete: () => {
        this.utilSrv.signupLoading.set(false);
      },
    });
  }

  login(data: LoginData) {
    this.utilSrv.loginLoading.set(true);
    console.log('Logging in');
    this.httpClient.post(`${this.baseUrl}/signin`, data).subscribe({
      next: (result: any) => {
        console.log(result);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + 1000 * 60 * 60 * 24);
        this.saveSession(
          result.user.email,
          result.user.name,
          result.user.token,
          result.user.id,
          expirationDate
        );
        this.isAuthenticated.set(true);
        console.log('Signed in');
        this.router.navigateByUrl('/search');
      },
      error: (e) => {
        console.log(e);
        this.utilSrv.loginLoading.set(false);
      },
      complete: () => {
        this.utilSrv.loginLoading.set(false);
      },
    });
  }

  logout() {
    localStorage.clear();
    this.isAuthenticated.set(false);
  }

  private saveSession(
    email: string,
    name: string,
    token: string,
    id: string,
    expirationDate: Date
  ) {
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
  }

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      // this.token = authInformation.token;
      this.isAuthenticated.set(true);
      this.setAuthTimer(expiresIn / 1000);
      // this.authStatusListener.next(true);
      // this.router.navigateByUrl('/home');
    }
    this.clientSrv.getUserLearnings()
  }

  getToken() {
    let token = localStorage.getItem("token");
    return token
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate),
    };
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }
}
