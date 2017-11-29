import * as anims from './../../animations/main-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations: [anims.fadeInOutLeft ,  anims.fadeInOut]
})
export class NavComponent implements OnInit {
  links: LinkInterface[];
  toggleNav: boolean = false;
  constructor() {}

  ngOnInit() {
    this.links = [{
      linkText: 'Home',
      linkUrl: '/'
    }, {
      linkText: 'Works',
      linkUrl: '/works'
    }, {
      linkText: 'About',
      linkUrl: '/about'
    }, {
      linkText: 'Contact',
      linkUrl: '/contact'
    }];
  }
}

interface LinkInterface {
  linkText: string;
  linkUrl: string;
}
