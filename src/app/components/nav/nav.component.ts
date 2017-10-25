import { fadeInOutLeft } from './../../animations/main-animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  animations:[ fadeInOutLeft ]
})
export class NavComponent implements OnInit {
links: linkInterface[];
toggleNav: boolean = false;
  constructor() { }

  ngOnInit() {
    this.links = [
      {
        linkText: 'Home',
        linkUrl: '/'
      },{
        linkText: 'Works',
        linkUrl: '/works'
      },{
        linkText: 'About',
        linkUrl: '/about'
      },{
        linkText: 'Contact',
        linkUrl: '/contact'
      }
    ]
    
  }

}

interface linkInterface{
  linkText: string,
  linkUrl: string
}