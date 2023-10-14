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

  userLearnings = signal<PromptData[]>([]);

  constructor(private http: HttpClient, private router: Router, private utilSrv: UtilityService) { }


  sendPromptRequest(data: PromptRequest) {
    console.log("SENDING");
    this.utilSrv.promptLoading.set(true);
    this.http.post(`${environment.baseUrl}/resource`, data).subscribe({
      next: (r: any) => {
        console.log(r)
        let promptData: PromptData = {...data, data: r.data }
        console.log(promptData);
        this.promptData.set(promptData);
        this.refreshLearnings();
        this.router.navigate(["/home"]);

      },
      error: (e) => {
        this.utilSrv.promptLoading.set(false);
        console.log(e)
      },
      complete: () => {
        console.log("COMPLETED!")
        this.utilSrv.promptLoading.set(false);

      }
    })
  }

  private refreshLearnings() {
    localStorage.removeItem("learnings");
  }

  getUserLearnings() {
    let learnings = localStorage.getItem("learnings");

    if (learnings) {
      this.userLearnings.set(JSON.parse(learnings));
      return;
    }
    this.http.get(`${environment.baseUrl}/user`).subscribe({
      next:(r: any) => {
        console.log(r);
        localStorage.setItem("learnings", JSON.stringify(r.user.learnings))
        this.userLearnings.set(r.user.learnings);
      },
      error: (e) => {
        console.log(e)
      },
      complete: () => {
        console.log("COMPLETED!")
      }
    })
  }

  generatePreviousLearning(data: PromptData) {
    this.promptData.set(data);
    this.router.navigate(["/home"])
  }
}
