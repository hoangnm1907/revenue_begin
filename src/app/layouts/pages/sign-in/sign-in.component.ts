import { UserModel } from './../../../models/user-model';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common-services/authentication.service';
import { LoaderService } from 'src/app/common-services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(
    private auth : AuthenticationService,
    private loading : LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    var loginError = localStorage.getItem('loginError');
    if (loginError) {
      console.log(loginError);
      var message = loginError;
    }
  }

  public userModel: UserModel = new UserModel()

  public onLogin() {
    const userModel = { ...this.userModel };
    this.loading.isLoading;
    var checkLogin = this.auth.login(this.userModel.userName, this.userModel.password);
    if (checkLogin) {
      this.router.navigate(['/dashboard']);
    } else {
      window.location.reload();
    }
  }

}
