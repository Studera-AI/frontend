import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  loading = signal(false)

  constructor() { }
}
