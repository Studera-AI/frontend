import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  theme = 'dark';

  constructor() {}

  ngOnInit() {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }
  onClick() {}
}
