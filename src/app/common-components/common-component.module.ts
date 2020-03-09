import { InternalServerErrorComponent } from './internal-server-error/internal-server-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    AccessDeniedComponent,
    PageNotFoundComponent,
    InternalServerErrorComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentModule { }
