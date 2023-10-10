import { Component, OnInit, effect } from '@angular/core';
import { PromptData } from 'src/app/interfaces/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private clientSrv: ClientService) {
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

  ngOnInit() {
    let now = new Date;
    this.date = {
      minute: now.getMinutes(),
      hour: now.getHours()
    }

    setInterval(() => {
      let now = new Date;
      this.date = {
        minutes: now.getMinutes(),
        hours: now.getHours()
      }
    }, 60*1000 )
  }

  onSearchChange(e: Event) {}

  theme = 'lark';

  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }

  onClick() {}
}
