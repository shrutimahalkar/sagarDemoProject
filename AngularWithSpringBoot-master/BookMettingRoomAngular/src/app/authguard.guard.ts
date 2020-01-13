import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router) { 

  }

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true
    }
    else{
      this.router.navigate(['/home'])
      return false;
    }
  }
}