import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { UtilityService } from 'src/app/services/utility.service';

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
  onClick() {}
  onSubmit() {}
}
