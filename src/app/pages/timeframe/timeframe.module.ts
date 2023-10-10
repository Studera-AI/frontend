import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeframePageRoutingModule } from './timeframe-routing.module';

import { TimeframePage } from './timeframe.page';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
    declarations: [TimeframePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TimeframePageRoutingModule,
        ComponentsModule,
        ReactiveFormsModule
    ]
})
export class TimeframePageModule {}
