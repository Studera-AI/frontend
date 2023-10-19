import { Component, HostBinding, Input, OnInit, signal } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent implements OnInit {
  settingsIconSrc = '../../../assets/icon/settings-outline.svg';
  helpIconSrc = '../../../assets/icon/help-circle-outline.svg';
  layerIconSrc = '../../../assets/icon/layer-custom.svg';
  homeIconSrc = '../../../assets/icon/home-custom.svg';
  pieIconSrc = '../../../assets/icon/pie-custom.svg';
  bookIconSrc = '../../../assets/icon/book-custom.svg';

  @Input() theme: string = '';
  @Input() active: number = 1;
  @HostBinding('class.dark')
  isDark = signal(false)

  constructor(
    private navCtrl: NavController,
    private clientSrv: ClientService
  ) {}

  ngOnInit() {
    if (this.theme == 'dark') {
      this.isDark.set(true);
      console.log('Dark');
      // document.getElementById('side-panel')?.classList.add('dark');
    }
  }
  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }

  onClick() {}

  goto(route: string) {
    this.navCtrl.navigateForward(route);
  }
  navigateToHome() {
    this.clientSrv.generatePreviousLearning(this.clientSrv.userLearnings()[0]);
    this.goto('/home');
  }
}
