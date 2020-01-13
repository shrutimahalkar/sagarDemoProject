import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../auth/room';
import { User } from '../auth/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  form: Room;

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private tlUrl = 'http://localhost:8080/api/test/tl';
  private searchUrl = 'http://localhost:8080/api/admin/getAllUsers';
  private roomurl = 'http://localhost:8080/api/room/add'
  private userurl = 'http://localhost:8080/api/user/add'

  room: Room;
  user: User;

  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }

  getTLBoard(): Observable<string> {
    return this.http.get(this.tlUrl, { responseType: 'text' });
  }

  public getRoom() {
    return this.http.get("http://localhost:8080/api/room/getAllRoom");
  }

  //to confirm the book room - user,pm,tl
  public getRoombyDate() {
    return this.http.get("http://localhost:8080/api/bookRoomForm/Datetime");
  }

  // to get all user in adminpanel - admin panel
  public getUser() {
    return this.http.get(this.searchUrl);
  }

  // to get the user by email -admin panel
  public getUserByEmail(email) {
    return this.http.get("http://localhost:8080/api/admin/findUser/" + email);
  }

  //to delete the user by id - admin panel
  public deleteUser(id) {
    return this.http.delete(`http://localhost:8080/api/admin/cancel/${id}`);
  }

  //to create a room - admin panel 
  public addRoom(info: Room): Observable<any> {
    return this.http.post<any>(this.roomurl, info);
  }

  public updateRoom(info: Room): Observable<any> {
    return this.http.post<any>(this.roomurl, info);
  }

  public addUser(info: User): Observable<any> {
    return this.http.post<any>(this.userurl, info);
  }

  public updateRole(user) {
    return this.http.post<any>("http://localhost:8080/api/user/role", user, { responseType: 'text' as 'json' });
  }

  //to get the facility - admin panel 
  public getFacility() {
    return this.http.get("http://localhost:8080/api/faciltiy/getAllFacility");
  }

  //delete room in admin panel- admin panel
  public deleteRoom(id) {
    return this.http.delete(`http://localhost:8080/api/room/delete/${id}`);
  }

  ///update to get room
  public getRoomById(id) {
    return this.http.get<Room>(`http://localhost:8080/api/room/${id}`);
  }


  ///update to get room
  public getUserById(id) {
    return this.http.get<User>(`http://localhost:8080/api/user/${id}`);
  }

  public getRoles() {
    return this.http.get("http://localhost:8080/api/roles/getAllRoles");
  }

  public confirmRoom(info: Room): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/room/bookRoom", info);
  }

  // to get the profile in all - user, pm,tl,admin
  public getProfile() {
    return this.http.get("http://localhost:8080/api/user/profile");
  }

  //to confirm room by date - user, pm , tl
  public confirmRoombyDate() {
    return this.http.get("http://localhost:8080/api/confirmDate");
  }

  //to change mail id 
  public changemail(email): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/editMailSave", email);
  }

  public tlChangeMail() {
    return this.http.get("http://localhost:8080/api/tlAllMailRequest");
  }

  //to confirm tl request - tl
  public ConfirmMailtlRequest(id) {
    return this.http.get(`http://localhost:8080/api/changeConfirmmailtl/${id}`);
  }

  public CancelMailtlRequest(id) {
    return this.http.get(`http://localhost:8080/api/changeCancelmailtl/${id}`);
  }

  //to pending tl request - tl
  gettlPendingMail() {
    return this.http.get("http://localhost:8080/api/tlAllPendingRequest");
  }

  // to get the mail confirm - tl
  gettlConfirmMail() {
    return this.http.get("http://localhost:8080/api/tlAllConfirmRequest");
  }

  // to get the mail cancel -tl
  gettlCancelMail() {
    return this.http.get("http://localhost:8080/api/tlAllCancelRequest");
  }

  public UserChangeMail() {
    return this.http.get("http://localhost:8080/api/userAllMailRequest");
  }

  //to confirm tl request - user
  public ConfirmMailRequest(id) {
    return this.http.get(`http://localhost:8080/api/changeConfirmmailuser/${id}`);
  }

  public CancelMailRequest(id) {
    return this.http.get(`http://localhost:8080/api/changeCancelmailuser/${id}`);
  }

  //to pending user request - user
  getUserPendingMail() {
    return this.http.get("http://localhost:8080/api/userAllPendingRequest");
  }

  // to get the mail confirm - user
  getUserConfirmMail() {
    return this.http.get("http://localhost:8080/api/userAllConfirmRequest");
  }

  // to get the mail cancel -user
  getUserCancelMail() {
    return this.http.get("http://localhost:8080/api/userAllCancelRequest");
  }

  public PMChangeMail() {
    return this.http.get("http://localhost:8080/api/userAllMailRequest");
  }

  //to confirm pm request - pm
  public ConfirmPmMailRequest(id) {
    return this.http.get(`http://localhost:8080/api/changeConfirmmailpm/${id}`);
  }

  public CancelPmMailRequest(id) {
    return this.http.get(`http://localhost:8080/api/changeCancelmailpm/${id}`);
  }

  //to pending pm request - pm
  getPmPendingMail() {
    return this.http.get("http://localhost:8080/api/pmAllPendingRequest");
  }

  // to get the mail confirm - pm
  getPmConfirmMail() {
    return this.http.get("http://localhost:8080/api/pmAllConfirmRequest");
  }

  // to get the mail cancel - pm
  getPmCancelMail() {
    return this.http.get("http://localhost:8080/api/pmAllCancelRequest");
  }

  public ForgetPassword(email): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/auth/forgot-password", email, httpOptions);
  }

  setter(room: Room) {
    this.room = room;
  }

  getter() {
    return this.room;
  }

  setter2(user: User) {
    this.user = user;
  }

  getter2() {
    return this.user;
  }

}
