import { fadeInOut, fadeInOutBottom } from './../../animations/main-animations';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOutBottom]
})
export class HomeComponent implements OnInit {
  featuredWorks: any[];
  featuredWorks$;
  constructor(private FeaturedWorks: FirebaseService) { }
  ngOnInit() {
    this.featuredWorks$ = this.FeaturedWorks.getFeaturedWorks();
    // this.featuredWorks$ = this.FeaturedWorks.getWorks();
    // this.FeaturedWorks.getWorks().subscribe((FeaturedWork)=> {this.featuredWorks = FeaturedWork});
  }
}

