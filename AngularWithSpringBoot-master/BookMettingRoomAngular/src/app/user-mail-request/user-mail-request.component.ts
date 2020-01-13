import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-mail-request',
  templateUrl: './user-mail-request.component.html',
  styleUrls: ['./user-mail-request.component.css']
})
export class UserMailRequestComponent implements OnInit {
  changeMail: any;
  ConfirmMailRequest: any;
  CancelMailRequest: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllUserMail();
  }

  confirmRoom(id) {
    let resp = this.userService.ConfirmMailRequest(id);
    resp.subscribe((data) => this.ConfirmMailRequest = data);
    window.location.reload();
  }

  cancelRoom(id) {
    let resp = this.userService.CancelMailRequest(id);
    resp.subscribe((data) => this.CancelMailRequest = data);
    window.location.reload();
  }

  getAllUserMail() {
    let resp = this.userService.UserChangeMail()
    resp.subscribe((data) => this.changeMail = data);
  }

  getAllUserPendingMail() {
    let resp = this.userService.getUserPendingMail();
    resp.subscribe((data) => this.changeMail = data);

  }

  getAllUserConfirmedMail() {
    let resp = this.userService.getUserConfirmMail();
    resp.subscribe((data) => this.changeMail = data);

  }

  getAllUserCancelMail() {
    let resp = this.userService.getUserCancelMail();
    resp.subscribe((data) => this.changeMail = data);
  }


}
