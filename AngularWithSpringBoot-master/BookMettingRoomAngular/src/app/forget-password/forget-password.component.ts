import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  
  form: any = {};
  info: any;
 
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
  }


  viewAvailable(email) {
    this.service.ForgetPassword(email).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['api/auth/gmailMessage'])
      }
    )
  }

  cancel() {
    this.router.navigate(['auth/login'])
  }
}
