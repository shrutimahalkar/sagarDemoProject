import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthLoginInfo } from '../auth/login-info';
import { AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-password-controller',
  templateUrl: './password-controller.component.html',
  styleUrls: ['./password-controller.component.css']
})
export class PasswordControllerComponent implements OnInit {
  email: any;
  form: any = {};
  info: any;
  ConfirmMailRequest: any;
  private loginInfo: AuthLoginInfo;
  newEmail:any;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.email = queryParams.get("email");
      this.newEmail = this.email;
      console.log(this.email);
    })

  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new AuthLoginInfo(
      this.form.email=this.newEmail,
      this.form.password);

    this.authService.forgetPassword(this.loginInfo).subscribe(
      data => {
        this.router.navigate(['api/auth/resetMessage'])
      },
      error => {
        console.log(error);
      }
    );
  }

}
