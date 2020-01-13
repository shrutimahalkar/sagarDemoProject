import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gmail-messsage',
  templateUrl: './gmail-messsage.component.html',
  styleUrls: ['./gmail-messsage.component.css']
})
export class GmailMesssageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
