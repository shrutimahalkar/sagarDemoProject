import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../auth/user';
import { Roles } from '../auth/roles';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  id: number
  roles: Roles;
  user: User;
  department:'';
  
  constructor(private service: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.service.getter2();
    let resp = this.service.getRoles();
    resp.subscribe((data) => this.roles = data);
  }

  updateUser() {
    this.service.updateRole(this.user).subscribe(
      data => {
        console.log(data);
        console.log(this.user);
        this.router.navigate(['search'])
      },
    )
  }

  CancelRoom() {
    this.router.navigate(['search'])
  }

}
