import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PromptRequest } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-timeframe',
  templateUrl: './timeframe.page.html',
  styleUrls: ['./timeframe.page.scss'],
})
export class TimeframePage implements OnInit {
  theme = "light";

  promptForm = new FormGroup({
    length: new FormControl(0, Validators.required),
    unit: new FormControl('days', Validators.required),
    type: new FormControl('text', Validators.required)
  })

  constructor(private clientSrv: ClientService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.promptForm.value);

    if (this.promptForm.invalid) {
      return
    }

    let data: PromptRequest = {
      title: "Introductory physics",
      timeframe:`${this.promptForm.controls.length.value!}${this.promptForm.controls.unit.value}`,
      type: this.promptForm.controls.type.value!
    }

    this.clientSrv.sendPromptRequest(data);


  }

}
