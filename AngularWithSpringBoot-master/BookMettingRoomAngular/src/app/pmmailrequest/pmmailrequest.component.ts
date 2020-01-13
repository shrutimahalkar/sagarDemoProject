import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pmmailrequest',
  templateUrl: './pmmailrequest.component.html',
  styleUrls: ['./pmmailrequest.component.css']
})
export class PmmailrequestComponent implements OnInit {

  changeMail: any;
  ConfirmMailRequest: any;
  CancelMailRequest: any;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllPmMail();
  }

  confirmRoom(id) {
    let resp = this.userService.ConfirmPmMailRequest(id);
    resp.subscribe((data) => this.ConfirmMailRequest = data);
    window.location.reload();
  }

  cancelRoom(id) {
    let resp = this.userService.CancelPmMailRequest(id);
    resp.subscribe((data) => this.CancelMailRequest = data);
    window.location.reload();
  }

  getAllPmMail() {
    let resp = this.userService.PMChangeMail()
    resp.subscribe((data) => this.changeMail = data);
  }

  getAllPmPendingMail() {
    let resp = this.userService.getPmPendingMail();
    resp.subscribe((data) => this.changeMail = data);

  }

  getAllPmConfirmedMail() {
    let resp = this.userService.getPmConfirmMail();
    resp.subscribe((data) => this.changeMail = data);

  }

  getAllPmCancelMail() {
    let resp = this.userService.getPmConfirmMail();
    resp.subscribe((data) => this.changeMail = data);
  }

}
