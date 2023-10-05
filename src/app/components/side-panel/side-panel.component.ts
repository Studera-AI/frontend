import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent  implements OnInit {
  settingsIconSrc = "../../../assets/icon/settings-outline.svg";
  helpIconSrc = "../../../assets/icon/help-circle-outline.svg";

  @Input() theme: string = "";
  @HostBinding('class.dark')
  isDark:boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.theme == "dark") {
      this.isDark = false
      console.log("Dark")
      document.getElementById("side-panel")?.classList.add("dark")
    }
  }

}
