import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent  implements OnInit {
  settingsIconSrc = "../../../assets/icon/settings-outline.svg";
  helpIconSrc = "../../../assets/icon/help-circle-outline.svg";

  constructor() { }

  ngOnInit() {}

}
