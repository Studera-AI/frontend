import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/auth/signup/signup.module').then(
        (m) => m.SignupPageModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'timeframe',
    loadChildren: () =>
      import('./pages/timeframe/timeframe.module').then(
        (m) => m.TimeframePageModule
      ),
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./pages/analytics/analytics.module').then(
        (m) => m.AnalyticsPageModule
      ),
  },
  {
    path: 'welcome',
    loadChildren: () =>
      import('./pages/welcome/welcome.module').then((m) => m.WelcomePageModule),
  },
  {
    path: 'test',
    loadChildren: () =>
      import('./pages/test/test.module').then((m) => m.TestPageModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./pages/feedback/feedback.module').then(
        (m) => m.FeedbackPageModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/auth/signup/signup.module').then(
        (m) => m.SignupPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
