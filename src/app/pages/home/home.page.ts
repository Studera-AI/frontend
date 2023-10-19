import { Component, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { PromptData } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    public clientSrv: ClientService,
    private router: Router,
    public utilSrv: UtilityService
  ) {
    effect(() => {
      this.data = clientSrv.promptData();
    });
  }

  data: PromptData = {
    data: '',
    title: '',
    timeframe: '',
    type: '',
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
  summary: any;

  ngOnInit() {
    let now = new Date();

    this.date = {
      minute: now.getMinutes(),
      hour: now.getHours(),
    };

    try {
      // ! -- DEV
      // const dummyinformation = JSON.parse(
      //   `{\n  "isLimitReached": false,\n  "studyPlan": [\n    {\n      "day": 1,\n      "title": "Introduction to Biology",\n      "time_allocation": "3 hours",\n      "summary": "Today, you will start your journey in introductory biology. Begin by understanding the basic concepts and principles of biology.",\n      "resources": [\n        {\n          "link": "https://www.khanacademy.org/science/high-school-biology",\n          "description": "Khan Academy's High School Biology course provides comprehensive video lessons and interactive quizzes to help you understand the fundamentals of biology."\n        },\n        {\n          "link": "https://www.crashcourse.com/courses/biology",\n          "description": "Crash Course Biology on YouTube offers entertaining and informative videos that cover various biological topics, such as cells, DNA, evolution, and more."\n        },\n        {\n          "link": "https://www.biologycorner.com",\n          "description": "Biology Corner provides free worksheets, study guides, and lab activities to reinforce your understanding of biology concepts."\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "title": "Cell Structure and Function",\n      "time_allocation": "4 hours",\n      "summary": "Today, you will delve deeper into the structure and function of cells, which are the basic building blocks of life.",\n      "resources": [\n        {\n          "link": "https://www.cellsalive.com",\n          "description": "Cells Alive offers interactive cell models, videos, and educational resources to help you explore cell structure and function."\n        },\n        {\n          "link": "https://www.khanacademy.org/science/high-school-biology",\n          "description": "Continue with Khan Academy's High School Biology course to learn about cell organelles, cell transport, and cell division."\n        },\n        {\n          "link": "https://www.biologyjunction.com/cells.htm",\n          "description": "Biology Junction provides concise notes, diagrams, and activities related to cell biology."\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "title": "Genetics and Heredity",\n      "time_allocation": "3.5 hours",\n      "summary": "Today, you will explore the fascinating world of genetics and heredity, which involves the study of inherited traits.",\n      "resources": [\n        {\n          "link": "https://www.khanacademy.org/science/high-school-biology",\n          "description": "Continue with Khan Academy's High School Biology course to learn about DNA, genes, Punnett squares, and genetic inheritance."\n        },\n        {\n          "link": "https://www.bozemanscience.com/genetics-heredity",\n          "description": "Bozeman Science provides educational videos on genetics and heredity, covering topics such as DNA replication, transcription, translation, and more."\n        },\n        {\n          "link": "https://www.nature.com/scitable/topicpage/genetics-an-introduction-489",\n          "description": "Nature Education offers an introduction to genetics, including explanations of Mendelian genetics, genetic variation, and genetic disorders."\n        }\n      ]\n    },\n    {\n      "day": 4,\n      "title": "Evolution and Natural Selection",\n      "time_allocation": "3.5 hours",\n      "summary": "Today, you will dive into the theory of evolution and the process of natural selection that drives the diversity of life on Earth.",\n      "resources": [\n        {\n          "link": "https://www.khanacademy.org/science/high-school-biology",\n          "description": "Continue with Khan Academy's High School Biology course to learn about the central concepts of evolution, including natural selection, adaptation, and speciation."\n        },\n        {\n          "link": "https://evolution.berkeley.edu/evolibrary/article/evo_01",\n          "description": "UC Berkeley's Understanding Evolution provides a comprehensive introduction to the theory of evolution, with interactive resources and examples."\n        },\n        {\n          "link": "https://www.ncbi.nlm.nih.gov/books/NBK21829/",\n          "description": "Read Chapter 1: Introduction of the book, 'Evolution' by Carl T. Bergstrom and Lee Alan Dugatkin, to gain a deeper understanding of evolutionary biology."\n        }\n      ]\n    },\n    {\n      "day": 5,\n      "title": "Ecology and Ecosystems",\n      "time_allocation": "3 hours",\n      "summary": "Today, you will explore the interactions between organisms and their environment, studying the field of ecology.",\n      "resources": [\n        {\n          "link": "https://www.khanacademy.org/science/high-school-biology",\n          "description": "Continue with Khan Academy's High School Biology course to learn about ecological relationships, population dynamics, biogeochemical cycles, and more."\n        },\n        {\n          "link": "https://www.sciencedirect.com/topics/earth-and-planetary-sciences/ecosystems",\n          "description": "ScienceDirect provides in-depth articles on ecosystems and related topics, covering ecological principles, biodiversity, and ecosystem dynamics."\n        },\n        {\n          "link": "https://www.nationalgeographic.org/encyclopedia/ecology/",\n          "description": "National Geographic's Ecology Encyclopedia offers a wealth of information on ecological concepts, including food webs, energy transfer, and conservation biology."\n        }\n      ]\n    }\n  ],\n  "summary": "In just 5 days, you will cover the basics of introductory biology. Start by understanding the fundamental principles of biology through resources such as Khan Academy and Crash Course Biology. Then, dive deeper into specific topics like cell structure, genetics, evolution, and ecology. Each day, allocate the recommended time to go through the provided resources and reinforce your understanding. By the end of this study plan, you will have gained knowledge in various areas of biology, laying a strong foundation for further learning."\n}`
      // );
      // ! -- Dev
      this.information = JSON.parse(this.clientSrv.promptData().data);
      this.plans = this.information.study_plan || this.information.studyPlan;
      this.summary = this.information.summary;
      console.log(this.plans);
    } catch (e) {
      console.log(e);
      this.router.navigate(['/search']);
    }

    // this.displayInfo();

    setInterval(() => {
      let now = new Date();
      this.date = {
        minutes: now.getMinutes(),
        hours: now.getHours(),
      };
    }, 60 * 1000);
  }

  onSearchChange(e: Event) {}

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }

  onClick() {}

  displayInfo() {
    let plans = this.information.study_plan;
    let summary = this.information.summary;
  }

  writeTest(day: number, title: string) {
    console.log('Setting up tests');
    this.clientSrv.generateTests(day, title);
  }
}
