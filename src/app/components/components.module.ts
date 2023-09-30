import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SidePanelComponent } from './side-panel/side-panel.component';



@NgModule({
  declarations: [SidePanelComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SidePanelComponent]
})

export class ComponentsModule { }
