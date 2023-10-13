import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  theme = 'dark';
  constructor() {}

  ngOnInit() {}
  onClick() {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }
}
