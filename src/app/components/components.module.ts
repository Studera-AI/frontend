import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { AccountModalComponent } from './account-modal/account-modal.component';



@NgModule({
  declarations: [SidePanelComponent, AccountModalComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SidePanelComponent]
})

export class ComponentsModule { }
