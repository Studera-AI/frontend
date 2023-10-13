import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.page.html',
  styleUrls: ['./assessment.page.scss'],
})
export class AssessmentPage implements OnInit {
  theme = 'light';
  constructor() {}

  ngOnInit() {}

  onClick() {}
  testQuestions = [
    {
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    },
    {
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    },
    {
      question: 'What is the capital of USA?',
      options: ['New York', 'Washington DC', 'Chicago', 'Las Vegas'],
    },
  ];

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }
}
