import { Component, OnInit, effect } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { UtilityService } from 'src/app/services/utility.service';
import { FeedbackData } from 'src/app/interfaces/client';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  theme = 'dark';

  constructor(
    private clientSrv: ClientService,
    public utilSrv: UtilityService
  ) {}

  ngOnInit() {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }
  feedbackForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    feedback: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  onClick() {}
  onSubmit() {
    if (!this.feedbackForm.valid) {
      return;
    }
    let data: FeedbackData = {
      email: this.feedbackForm.controls.email.value!,
      feedback: this.feedbackForm.controls.feedback.value!,
    };
    this.clientSrv.submitFeedback(data);
  }
}
