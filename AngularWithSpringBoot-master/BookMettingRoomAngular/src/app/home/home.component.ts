import { Component, OnInit, Input } from '@angular/core';

import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  profile: any;
  @Input() user: User;

  public roles: string[];
  public authority: string;
  public username: string;

  constructor(private service: UserService, private router: Router, private token: TokenStorageService) { }


  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      email: this.token.getEmail(),
      authorities: this.token.getAuthorities()
    };
    this.getProfile();

    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.username = this.token.getUsername();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        } else if (role === 'ROLE_TL') {
          this.authority = 'tl';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }

  }

  editEmail() {
    this.router.navigate(['/ChangeMail', this.user.id])
  }


  getProfile() {
    let resp = this.service.getProfile();
    resp.subscribe((data) => this.profile = data);
  }

  onLogout() {
    this.token.signOut();
    this.router.navigate(['home'])
  }
}