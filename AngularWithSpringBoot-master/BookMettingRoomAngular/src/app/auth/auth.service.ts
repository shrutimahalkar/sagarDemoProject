import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './sigup-info';
import { DateTime } from './datetime';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  forgetPassword(credentials: AuthLoginInfo): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/reset-password', credentials, httpOptions);
  }


  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }

  public getDept() {
    return this.http.get("http://localhost:8080/api/auth/dept");
  }

  //to get the date - user, pm, tl
  datetime(info: DateTime): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/bookRoomForm/Datetime", info, httpOptions);
  }

  loggedIn() {
    return sessionStorage.getItem('AuthToken');
  }
}