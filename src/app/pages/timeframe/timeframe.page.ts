import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { PromptRequest } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-timeframe',
  templateUrl: './timeframe.page.html',
  styleUrls: ['./timeframe.page.scss'],
})
export class TimeframePage implements OnInit {
  theme = 'dark';
  title: any;

  promptForm = new FormGroup({
    length: new FormControl(0, Validators.required),
    unit: new FormControl('days', Validators.required),
    type: new FormControl('text', Validators.required),
  });

  constructor(
    private clientSrv: ClientService,
    private activatedRoute: ActivatedRoute,
    public utilSrv: UtilityService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((p: any) => {
      console.log(p);
      this.title = p['params']['title'];
    });
  }

  onSubmit() {
    if (this.promptForm.invalid) {
      return;
    }

    let data: PromptRequest = {
      title: this.title,
      timeframe: `${this.promptForm.controls.length.value!}${
        this.promptForm.controls.unit.value
      }`,
      type: this.promptForm.controls.type.value!,
    };

    this.clientSrv.sendPromptRequest(data);
  }
}
