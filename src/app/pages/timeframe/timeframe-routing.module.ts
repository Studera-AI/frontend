import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeframePage } from './timeframe.page';

const routes: Routes = [
  {
    path: '',
    component: TimeframePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeframePageRoutingModule {}
