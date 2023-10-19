import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  theme = 'light';
  months = [
    {name: 'January', selected: false},
    {name: 'February', selected: false},
    {name: 'March', selected: false},
    {name: 'April', selected: false},
    {name: 'May', selected: false},
    {name: 'June', selected: false},
    {name: 'July', selected: false},
    {name: 'August', selected: false},
    {name: 'September', selected: false},
    {name: 'October', selected: false},
    {name: 'November', selected: false},
    {name: 'December', selected: false}
  ];

  recommendedCourses = [
    {name: "Electrochemistry", badgeColor: "#ffb4ae"},
    {name: "Electrochemistry", badgeColor: "#b3cde3"},
    {name: "Gas Laws", badgeColor: "#CCEBC5"},
    {name: "Gas Laws", badgeColor: "#DECBE4"},
    {name: "Inorganic Chemistry", badgeColor: "#FED9A6"},
  ]
  days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  currentDay = 31;
  constructor() {}

  ngOnInit() {
    this.setDate();
  }
  onClick() {}


  setDate() {
    let now = new Date();
    let currentMonth = now.getMonth();
    // console.log(currentMonth);
    this.months[currentMonth].selected = true;
    // console.log(now.getDay())
    // console.log(now.getDate());
    this.currentDay = now.getDate()
  }

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }

  getDayOfWeek(itemDay: number) {

    let daysOfWeek = [
      "Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"
    ];

    let now = new Date();
    now.setDate(1);
    let firstDayOfWeekOfMonth = now.getDay();
    let diffBetweenTodayAndFirstDay = itemDay - 1;
    let dayOfWeek = daysOfWeek[(firstDayOfWeekOfMonth + diffBetweenTodayAndFirstDay) % 7];
    return dayOfWeek;
  }

  getSuffix(itemDay: number) {

    if (itemDay == 1 || itemDay == 21 || itemDay == 31) {
      return 'st'
    }
    if (itemDay == 2 || itemDay == 22) {
      return 'nd'
    }

    if (itemDay == 3 || itemDay == 23) {
      return 'rd'
    }

    if (itemDay < 21 || itemDay < 31) {
      return 'th'
    }

    return 'th'
  }
}
