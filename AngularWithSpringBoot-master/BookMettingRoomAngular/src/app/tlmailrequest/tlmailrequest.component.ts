import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tlmailrequest',
  templateUrl: './tlmailrequest.component.html',
  styleUrls: ['./tlmailrequest.component.css']
})
export class TlmailrequestComponent implements OnInit {
  changeMail: any;
  ConfirmMailRequest: any;
  CancelMailRequest: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllTlMail();
  }

  confirmRoom(id) {
    let resp = this.userService.ConfirmMailtlRequest(id);
    resp.subscribe((data) => this.ConfirmMailRequest = data);
    window.location.reload();
  }

  cancelRoom(id) {
    let resp = this.userService.CancelMailtlRequest(id);
    resp.subscribe((data) => this.CancelMailRequest = data);
    window.location.reload();
  }

  getAllTlMail() {
    let resp = this.userService.tlChangeMail()
    resp.subscribe((data) => this.changeMail = data);
  }

  getAllTlPendingMail() {
    let resp = this.userService.gettlPendingMail();
    resp.subscribe((data) => this.changeMail = data);

  }

  getAllTlConfirmedMail() {
    let resp = this.userService.gettlConfirmMail();
    resp.subscribe((data) => this.changeMail = data);

  }

  getAllTlCancelMail() {
    let resp = this.userService.gettlCancelMail();
    resp.subscribe((data) => this.changeMail = data);
  }


}
