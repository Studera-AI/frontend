import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PromptRequest } from '../interfaces/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }


  sendPromptRequest(data: PromptRequest) {
    console.log("SENDING");
    this.http.post(`${environment.baseUrl}/resource`, data).subscribe({
      next: (r) => {
        console.log(r)
      },
      error: (e) => {
        console.log(e)
      },
      complete: () => {
        console.log("COMPLETED!")
      }
    })
  }
}
