import { Component, OnInit } from '@angular/core';
import { DateTime } from '../auth/datetime';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-room-date-wise',
  templateUrl: './book-room-date-wise.component.html',
  styleUrls: ['./book-room-date-wise.component.css']
})
export class BookRoomDateWiseComponent implements OnInit {
  form: any = {};
  date: Date = new Date();
  datetime: DateTime;
  errorMessage: any;

  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm:a',
    defaultOpen: false,
    closeOnSelect: true,
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  // ConfirmRoom() {
  //   // console.log(this.datetime);
  //   this.datetime = new DateTime(
  //     this.form.date1,
  //     this.form.date2,
  //   );

  //   this.authService.datetime(this.datetime).subscribe(
  //     data => {
  //       console.log(this.datetime);
  //     },
  //     error => {
  //       console.log(error);
  //       this.errorMessage = error.error.message;

  //     }
  //   );
  // }

  viewAvailable() {

    let StartDate = this.form.date1;
    let EndDate = this.form.date2;
    let eDate = new Date(EndDate);
    let sDate = new Date(StartDate);
    let CurrentDate = new Date();

    if (sDate < CurrentDate) {
      this.errorMessage = ("Date must be greater than or equal to current date ");
      return false;
    } else if (sDate >= eDate) {
      this.errorMessage = ("Please ensure that the End Date is greater than  the Start Date.");
      return false;
    } else if (StartDate === EndDate) {
      this.errorMessage = ("Date Should not be same ");
      return false;
    } else if (StartDate === undefined) {
      this.errorMessage = ("Please Select Date Time From");
      return false;
    } else if (EndDate === undefined) {
      this.errorMessage = ("Please Select Date Time To");
      return false;
    }

    this.datetime = new DateTime(
      this.form.date1,
      this.form.date2,
    );

    this.authService.datetime(this.datetime).subscribe(
      data => {
        console.log(this.datetime);
        this.router.navigate(['/user']);
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;

      }
    );
  }
}

