import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { PromptData } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private clientSrv: ClientService,
    private router: Router
  ) {
    effect(() => {
      this.data = clientSrv.promptData()
    })
  }

  data: PromptData = {
    data: "",
    title: "",
    timeframe: "",
    type: "",
  };

  date: any;

  notifIconSrc = '../../../assets/icon/notification.svg';
  personIconSrc = '../../../assets/icon/person.svg';

  info = [
    { day: 1, topic: 'Ahaha', selected: false },
    { day: 2, topic: 'Adedaha', selected: false },
    { day: 3, topic: 'Introduction to Computer Science', selected: true },
    { day: 4, topic: 'Adedaha', selected: false },
    { day: 5, topic: 'Adedaha', selected: false },
    { day: 6, topic: 'Adedaha', selected: false },
    { day: 7, topic: 'Adedaha', selected: false },
    { day: 8, topic: 'Adedaha', selected: false },
    { day: 9, topic: 'Adedaha', selected: false },
  ];

  // mainData = JSON.parse(this.data.data.study_plan[0].title); THIS WOULD BE THE RESPONSE FORMAT

  notes = [
    {
      title: 'Sub header',
      content:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa  quis enim.',
    },
    {
      title: 'Sub header 2',
      content:
        'Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.',
    },
  ];

  // serverResponse = '{\n  "study_plan": [\n    {\n      "day": "Day 1",\n      "title": "Introduction to Competitive Programming",\n      "time_allocation": "2 hours",\n      "summary": "Learn about the basics of competitive programming and its importance.",\n      "resources": [\n        {\n          "link": "https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/",\n          "description": "GeeksforGeeks - Competitive Programming: A Complete Guide"\n        },\n        {\n          "link": "https://www.topcoder.com/community/competitive-programming/tutorials/",\n          "description": "Topcoder - Competitive Programming Tutorials"\n        },\n        {\n          "link": "https://www.codechef.com/certification/data-structures-and-algorithms/prepare#foundation",\n          "description": "CodeChef - Data Structures and Algorithms Tutorial"\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "title": "Data Structures and Algorithms",\n      "time_allocation": "3 hours",\n      "summary": "Learn and revise fundamental data structures and algorithms used in competitive programming.",\n      "resources": [\n        {\n          "link": "https://www.geeksforgeeks.org/data-structures/",\n          "description": "GeeksforGeeks - Data Structures"\n        },\n        {\n          "link": "https://www.geeksforgeeks.org/fundamentals-of-algorithms/",\n          "description": "GeeksforGeeks - Fundamentals of Algorithms"\n        },\n        {\n          "link": "https://cp-algorithms.com/",\n          "description": "CP Algorithms - Competitive Programming Algorithms"\n        }\n      ]\n    },\n    {\n      "day": "Day 3",\n      "title": "Divide and Conquer",\n      "time_allocation": "2.5 hours",\n      "summary": "Learn about Divide and Conquer technique and how to apply it in competitive programming problems.",\n      "resources": [\n        {\n          "link": "https://www.geeksforgeeks.org/divide-and-conquer/",\n          "description": "GeeksforGeeks - Divide and Conquer"\n        },\n        {\n          "link": "https://www.youtube.com/watch?v=0YLpOzygyw8",\n          "description": "YouTube - Divide and Conquer by Abdul Bari"\n        },\n        {\n          "link": "https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/tutorial/",\n          "description": "HackerEarth - Sorting and Searching Algorithms"\n        }\n      ]\n    },\n    {\n      "day": "Day 4",\n      "title": "Dynamic Programming",\n      "time_allocation": "3.5 hours",\n      "summary": "Explore the concept of dynamic programming and its applications in competitive programming problems.",\n      "resources": [\n        {\n          "link": "https://www.geeksforgeeks.org/dynamic-programming/",\n          "description": "GeeksforGeeks - Dynamic Programming"\n        },\n        {\n          "link": "https://www.topcoder.com/community/competitive-programming/tutorials/dynamic-programming-from-novice-to-advanced/",\n          "description": "Topcoder - Dynamic Programming Tutorial"\n        },\n        {\n          "link": "https://www.hackerearth.com/practice/algorithms/dynamic-programming/introduction-to-dynamic-programming-1/tutorial/",\n          "description": "HackerEarth - Introduction to Dynamic Programming"\n        }\n      ]\n    },\n    {\n      "day": "Day 5",\n      "title": "Graph Theory",\n      "time_allocation": "2.5 hours",\n      "summary": "Understand the concepts of graph theory and its applications in competitive programming.",\n      "resources": [\n        {\n          "link": "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/",\n          "description": "GeeksforGeeks - Graph Data Structure and Algorithms"\n        },\n        {\n          "link": "https://www.youtube.com/watch?v=EPUtH-mcWiY",\n          "description": "YouTube - Graph Theory by Abdul Bari"\n        },\n        {\n          "link": "https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/",\n          "description": "HackerEarth - Depth First Search in Graphs"\n        }\n      ]\n    }\n  ],\n  "summary": "In this 10-day study plan, you will learn the fundamentals of competitive programming. The resources provided include tutorials, articles, and videos covering various topics such as data structures, algorithms, divide and conquer, dynamic programming, and graph theory. Each day focuses on a specific topic with allocated time for study. By following this study plan, you will gain a strong foundation in competitive programming and be well-prepared for solving challenging coding problems.",\n  "isLimitReached": false\n}'

  theme = 'lark';
  information: any;
  plans: any;


  ngOnInit() {
    let now = new Date;
    this.date = {
      minute: now.getMinutes(),
      hour: now.getHours()
    }

    try {
      this.information = JSON.parse(this.clientSrv.promptData().data);
      this.plans = this.information.study_plan;
    } catch (e) {
      this.router.navigate(["/search"])
    }

    this.displayInfo();

    setInterval(() => {
      let now = new Date();
      this.date = {
        minutes: now.getMinutes(),
        hours: now.getHours(),
      }
    }, 60*1000 )
  }

  onSearchChange(e: Event) {}


  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }

  onClick() {}

  displayInfo() {
    let plans = this.information.study_plan;
  }
}
