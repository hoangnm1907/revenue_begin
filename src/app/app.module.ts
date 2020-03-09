import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AuthenticationService } from './common-services/authentication.service';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { PageRoutingModule } from './layouts/pages/page-routing.module';
import { PageModule } from './layouts/pages/page.module';
import { CommonComponentModule } from './common-components/common-component.module';
import { LoaderService } from './common-services/loader.service';

import { CoreModule } from './cores/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    CommonComponentModule,
    PageModule,
    PageRoutingModule
  ],
  providers: [
    LoaderService,
    AuthenticationService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
