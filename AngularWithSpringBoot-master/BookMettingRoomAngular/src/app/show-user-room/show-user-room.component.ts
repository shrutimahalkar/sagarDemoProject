import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomserviceService } from '../services/roomservice.service';

@Component({
  selector: 'app-show-user-room',
  templateUrl: './show-user-room.component.html',
  styleUrls: ['./show-user-room.component.css']
})
export class ShowUserRoomComponent implements OnInit {
  adminRoomBook: any;
  p: number = 1;
  searchText;
  
  constructor(private router: Router, private service: RoomserviceService) { }

  ngOnInit() {
    this.getAllUserBookRoom();
  }

  getAllUserBookRoom() {
    let resp = this.service.getAllStatus();
    resp.subscribe((data) => this.adminRoomBook = data);
  }

  getAllUserPendingBookRoom() {
    let resp = this.service.getPendingStatus();
    resp.subscribe((data) => this.adminRoomBook = data);

  }

  getAllUserConfirmedBookRoom() {
    let resp = this.service.getConfirmStatus();
    resp.subscribe((data) => this.adminRoomBook = data);

  }

  getAllUserCancelBookRoom() {
    let resp = this.service.getCancelStatus();
    resp.subscribe((data) => this.adminRoomBook = data);
  }

}
