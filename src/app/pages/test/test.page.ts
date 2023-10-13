import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  theme = 'light';

  //DUMMY CONTENT
  day = 'Day 1';
  content =
    '{\n      "day": "Day 1",\n      "title": "Introduction to Competitive Programming",\n      "time_allocation": "2 hours",\n      "summary": "Learn about the basics of competitive programming and its importance.",\n      "resources": [\n        {\n          "link": "https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/",\n          "description": "GeeksforGeeks - Competitive Programming: A Complete Guide"\n        },\n        {\n          "link": "https://www.topcoder.com/community/competitive-programming/tutorials/",\n          "description": "Topcoder - Competitive Programming Tutorials"\n        },\n        {\n          "link": "https://www.codechef.com/certification/data-structures-and-algorithms/prepare#foundation",\n          "description": "CodeChef - Data Structures and Algorithms Tutorial"\n        }\n      ]\n    }';

  constructor(private router: Router) {}

  ngOnInit() {}

  onClick() {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }
  navigateToAssessment() {
    // let data = {
    //   title: this.title,
    //   timeframe:`${this.promptForm.controls.length.value!}${this.promptForm.controls.unit.value}`,
    //   type: this.promptForm.controls.type.value!
    // }

    // this.clientSrv.sendPromptRequest(data);
    this.router.navigateByUrl('/test/assessment');
  }
}
