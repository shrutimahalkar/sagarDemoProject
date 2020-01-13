import { Component, OnInit } from '@angular/core';
import { Room } from '../auth/room';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { Mails } from '../auth/mail';
import { User } from '../auth/user';

@Component({
  selector: 'app-change-mail',
  templateUrl: './change-mail.component.html',
  styleUrls: ['./change-mail.component.css']
})
export class ChangeMailComponent implements OnInit {

  form: any = {};
  info: any;
  profile: any;

  constructor(private service: UserService, private router: Router, private token: TokenStorageService) { }

  ngOnInit() {
    this.viewProfile();
  }

  viewAvailable(email) {
    this.service.changemail(email).subscribe(
      data => {
        console.log(email);
        this.router.navigate(['home'])
      }
    )
  }

  viewProfile() {
    return this.service.getProfile().subscribe((data) => this.profile = data);
  }

  cancel() {
    this.router.navigate(['home'])
  }
}