import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  testTitle: any = this.clientSrv.userLearnings()[0].title || 'No title';
  theme = 'dark';

  //DUMMY CONTENT
  day = 'Day 1';
  content =
    '{\n      "day": "Day 1",\n      "title": "Introduction to Competitive Programming",\n      "time_allocation": "2 hours",\n      "summary": "Learn about the basics of competitive programming and its importance.",\n      "resources": [\n        {\n          "link": "https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/",\n          "description": "GeeksforGeeks - Competitive Programming: A Complete Guide"\n        },\n        {\n          "link": "https://www.topcoder.com/community/competitive-programming/tutorials/",\n          "description": "Topcoder - Competitive Programming Tutorials"\n        },\n        {\n          "link": "https://www.codechef.com/certification/data-structures-and-algorithms/prepare#foundation",\n          "description": "CodeChef - Data Structures and Algorithms Tutorial"\n        }\n      ]\n    }';

  constructor(private router: Router, private clientSrv: ClientService) {}

  ngOnInit() {}

  onClick() {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }
  navigateToAssessment() {
    console.log(this.testTitle);
    this.clientSrv.generateTests(1, this.clientSrv.userLearnings()[0].title);
  }
}
