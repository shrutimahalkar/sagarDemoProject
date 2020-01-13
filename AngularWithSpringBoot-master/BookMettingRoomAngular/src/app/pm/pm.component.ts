import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RoomBookingDetails } from '../auth/roomBookingDetails';
import { Router } from '@angular/router';
import { RoomserviceService } from '../services/roomservice.service';

@Component({
  selector: 'app-pm',
  templateUrl: './pm.component.html',
  styleUrls: ['./pm.component.css']
})
export class PmComponent implements OnInit {
 
  constructor(private router: Router, private service: RoomserviceService) { }

  ngOnInit() {
    
  }

 
}

