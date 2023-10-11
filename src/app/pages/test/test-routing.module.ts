import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPage } from './test.page';
import { AssessmentPage } from './assessment/assessment.page';

const routes: Routes = [
  {
    path: '',
    component: TestPage,
  },
  {
    path: 'assessment',
    loadChildren: () =>
      import('./assessment/assessment.module').then(
        (m) => m.AssessmentPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestPageRoutingModule {}
