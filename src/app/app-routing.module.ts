import { InternalServerErrorComponent } from './common-components/internal-server-error/internal-server-error.component';
import { PageNotFoundComponent } from './common-components/page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './common-components/access-denied/access-denied.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
    data: {
      title: 'access-denied'
    }
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      title: 'page-not-found'
    }
  },
  {
    path: 'internal-server-error',
    component: InternalServerErrorComponent,
    data: {
      title: 'internal-server-error'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        preloadingStrategy: PreloadAllModules,
        scrollPositionRestoration: 'enabled',
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
