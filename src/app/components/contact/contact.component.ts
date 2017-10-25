import { fadeInOut, fadeInOutBottom } from './../../animations/main-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [ fadeInOut, fadeInOutBottom ]
})
export class ContactComponent implements OnInit {
  pageTitle: string = "It would be great to hear from you!";

  constructor() { }

  ngOnInit() {
  }

}
