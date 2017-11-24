import { Component, OnInit } from '@angular/core';
import { fadeInOutBottom, fadeInOut } from './../../animations/main-animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  animations: [ fadeInOutBottom, fadeInOut ]
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
