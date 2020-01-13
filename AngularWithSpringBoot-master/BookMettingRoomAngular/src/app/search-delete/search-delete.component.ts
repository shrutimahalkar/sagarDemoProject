import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  users: any;
  name: any;
  info: any;
  message: string;
  p:number=1;
  searchText;

  constructor(private service: UserService, private token: TokenStorageService, private router: Router) { }

  public findUserByEmailId() {
    let resp = this.service.getUserByEmail(this.name);
    resp.subscribe((data) => this.users = data);
  }

  ngOnInit() {
    let resp = this.service.getUser();
    resp.subscribe((data) => this.users = data);
  }

  updateUser(user) {
    this.service.setter2(user);
    this.router.navigate(['/editUser']);
  }

  public deleteRoom(id: number) {
    let resp = this.service.deleteUser(id);
    resp.subscribe((data) => this.users = data);
    this.message = `Delete of User ${id} Successful`;
    window.location.reload();
  }
}
