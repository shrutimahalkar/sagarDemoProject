import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Room } from '../auth/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  rooms: any;
  p:number=1;
  public searchText;

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
    let resp = this.userService.getRoombyDate();
    resp.subscribe((data) => this.rooms = data);
  }

  BookRoom(room) {
    this.userService.setter(room);
    this.router.navigate(['/BookRoom']);
  }
}