import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { TlComponent } from './tl/tl.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserService } from './services/user.service';
import { BookroomComponent } from './bookroom/bookroom.component';
import { AdminBookRoomComponent } from './admin-book-room/admin-book-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination'
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ShowUserRoomComponent } from './show-user-room/show-user-room.component';
import { ChangeMailComponent } from './change-mail/change-mail.component';
import { BookRoomDateWiseComponent } from './book-room-date-wise/book-room-date-wise.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { RoomBookDateComponent } from './room-book-date/room-book-date.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardGuard } from './authguard.guard';
import { UserMailRequestComponent } from './user-mail-request/user-mail-request.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PasswordControllerComponent } from './password-controller/password-controller.component';
import { GmailMesssageComponent } from './gmail-messsage/gmail-messsage.component';
import { ResetPasswordSuccessMessageComponent } from './reset-password-success-message/reset-password-success-message.component';
import { TlmailrequestComponent } from './tlmailrequest/tlmailrequest.component';
import { PmmailrequestComponent } from './pmmailrequest/pmmailrequest.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserComponent,
    PmComponent,
    AdminComponent,
    TlComponent,
    SearchDeleteComponent,
    AddRoomComponent,
    EditRoomComponent,
    EditUserComponent,
    BookroomComponent,
    AdminBookRoomComponent,
    ShowUserRoomComponent,
    ChangeMailComponent,
    BookRoomDateWiseComponent,
    RoomBookDateComponent,
    UserMailRequestComponent,
    ForgetPasswordComponent,
    PasswordControllerComponent,
    GmailMesssageComponent,
    ResetPasswordSuccessMessageComponent,
    TlmailrequestComponent,
    PmmailrequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AngularDateTimePickerModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    }),
  ],
  providers: [httpInterceptorProviders, AuthGuardGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
