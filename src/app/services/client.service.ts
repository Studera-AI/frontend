import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { PromptData, PromptRequest } from '../interfaces/client';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  promptData = signal<PromptData>({
    title: "",
    timeframe: "",
    type: "",
    data: ""
  });

  constructor(private http: HttpClient, private router: Router, private utilSrv: UtilityService) { }


  sendPromptRequest(data: PromptRequest) {
    console.log("SENDING");
    this.utilSrv.promptLoading.set(true)
    // this.http.post(`${environment.baseUrl}/resource`, data).subscribe({
    //   next: (r: any) => {
    //     console.log(r)
    //     let promptData: PromptData = {...data, data: r.data }
    //     console.log(promptData);
    //     this.promptData.set(promptData);
    //     this.router.navigate(["/home"]);

    //   },
    //   error: (e) => {
    //     this.utilSrv.promptLoading.set(false);
    //     console.log(e)
    //   },
    //   complete: () => {
    //     console.log("COMPLETED!")
    //     this.utilSrv.promptLoading.set(false);
    //   }
    // })
  }
}
