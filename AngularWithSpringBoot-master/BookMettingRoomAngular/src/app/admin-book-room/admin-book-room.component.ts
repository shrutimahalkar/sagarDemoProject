import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomserviceService } from '../services/roomservice.service';
import { RoomBookingDetails } from '../auth/roomBookingDetails';

@Component({
  selector: 'app-admin-book-room',
  templateUrl: './admin-book-room.component.html',
  styleUrls: ['./admin-book-room.component.css']
})
export class AdminBookRoomComponent implements OnInit {
  adminRoomBook: any;
  adminBookRoom: RoomBookingDetails;
  message: any;
  confirmBookRoom: any;
  cancelBookRoom: any;
  p: number = 1;
  searchText;
  
  constructor(private router: Router, private service: RoomserviceService) { }

  ngOnInit() {
    this.getAllBookRoom();
  }

  getAllBookRoom() {
    let resp = this.service.getAllBookRoom();
    resp.subscribe((data) => this.adminRoomBook = data);
  }

  confirmRoom(booking_id, id) {
    let resp = this.service.confirmRoom(booking_id, id);
    resp.subscribe((data) => this.confirmBookRoom = data);
    window.location.reload();
    this.getAllBookRoom();
  }

  cancelRoom(booking_id, id) {
    let resp = this.service.cancelRoom(booking_id, id);
    resp.subscribe((data) => this.cancelBookRoom = data);
    window.location.reload();
    this.getAllBookRoom();
   }


}
