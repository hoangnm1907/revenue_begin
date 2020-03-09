import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './../../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'dashboard'
    }
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    data: {
      title: 'sign-in'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule { }
