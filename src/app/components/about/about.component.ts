import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import { fadeInOut, fadeInOutBottom } from './../../animations/main-animations';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fadeInOut, fadeInOutBottom]
})
export class AboutComponent implements OnInit {
  pageTitle: string = 'About MYA';
  about: any = {};
  about$;
  cookie_About: string;
  cookie_About2: boolean;
  toggleNav: boolean = true;

  constructor(private aboutServeice: FirebaseService, private cookieService: CookieService) { }

  ngOnInit() {
    // console.log(this.aboutServeice);
    // this.aboutServeice.getAbout().subscribe(About => this.about = About);
    this.about$ = this.aboutServeice.getAbout();

    // this.About.getAbout().subscribe(About=>this.about = About);
    this.cookie_About2 = this.cookieService.check('ckAbout');
    // this.cookie_About = this.cookieService.get('ckAbout');
    // if (this.cookie_About == 'cookie test About') this.toggleNav = false;

  }
  toggle() {
    // Set cokkie test
    this.cookieService.set('ckAbout', 'cookie test About', 0.5);
    this.cookie_About2 = true;
    console.log(this.cookie_About2);
  }

}
