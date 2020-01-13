import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SignUpInfo } from '../auth/sigup-info';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  dept: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // let resp = this.authService.getDept();
    // resp.subscribe((data) => this.dept = data);
    this.form.department = [];
  }


  onSubmit() {
    console.log(this.form);
    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.department,
    );
    console.log(this.form.dept)

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        console.log(this.signupInfo);
      },
      error => {
        console.log(error);
        this.errorMessage = "Please Register Again";
        this.isSignUpFailed = true;
      }
    );
  }
}