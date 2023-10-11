import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  theme = 'light';
  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }
  navigateToAssessment() {
    this.router.navigateByUrl('/test/assessment');
  }
}
