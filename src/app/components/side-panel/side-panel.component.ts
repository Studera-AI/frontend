import { Component, HostBinding, Input, OnInit } from '@angular/core';

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
  @HostBinding('class.dark')
  isDark: boolean = true;

  constructor() {}

  ngOnInit() {
    if (this.theme == 'dark') {
      this.isDark = false;
      console.log('Dark');
      document.getElementById('side-panel')?.classList.add('dark');
    }
  }
  checkButtonColor(theme: string) {
    let buttonColor = theme !== 'dark' ? 'palette-dark' : 'dark';

    return buttonColor;
  }

  onClick() {}
}
