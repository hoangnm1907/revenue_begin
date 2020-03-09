import { UserModel } from './../../../models/user-model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common-services/authentication.service';
import { LoaderService } from 'src/app/common-services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private auth : AuthenticationService,
    private loading : LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public userModel: UserModel = new UserModel()

  public onLogout() {
    this.loading.isLoading;
    var checkLogout = this.auth.logout();
    if (checkLogout) {
      this.router.navigate(['/sign-in']);
    }
  }

}
