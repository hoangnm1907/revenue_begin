import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    CommonModule
  ]
})
export class PageModule { }
