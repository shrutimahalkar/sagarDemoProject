import { Component, OnInit } from '@angular/core';
import { Room } from '../auth/room';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  id: number
  facilitys: any;
  room: Room;
  location:'';

  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.room = this.service.getter();
    let resp = this.service.getFacility();
    resp.subscribe((data) => this.facilitys = data);
  }

  UpdateRoom() {
    this.service.updateRoom(this.room).subscribe(
      data => {
        console.log(data);
        console.log(this.room);
        this.router.navigate(['admin'])
      },
    )
  }
  CancelRoom() {
    this.router.navigate(['admin'])
  }
}
