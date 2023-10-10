import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  loginLoading = signal(false)
  signupLoading = signal(false)

  constructor() { }
}
