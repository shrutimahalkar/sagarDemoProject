import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  rooms: any;
  name: any;
  info: any;
  message: string;
  popoverTitle:string = "Room Delete Confirmation";
  popoverMessage:string = "Do you want to really delete?";
  confirmClicked:boolean = false;
  cancelClicked:boolean = false;
  p:number=1;
  searchText;
  
  constructor(private service: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllRoom();
  }

  public deleteRoom(id: number) {
    let resp = this.service.deleteRoom(id);
    resp.subscribe((data) => this.rooms = data);
    this.message = `Delete of Room Successful`;
    window.location.reload();
    this.getAllRoom();
  }

  getAllRoom() {
    let resp = this.service.getRoom();
    resp.subscribe((data) => this.rooms = data);
  }

  updateRoom(room) {
    this.service.setter(room);
    this.router.navigate(['/editRoom']);
  }

}