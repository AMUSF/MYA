import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../../services/firebase.service';
import * as firebase from 'firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import { fadeInOutBottom, fadeInOut } from './../../animations/main-animations';
import "rxjs/add/operator/map";



@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  animations:[ fadeInOutBottom, fadeInOut ]
})
export class WorksComponent implements OnInit {
  pageTitle: string = 'Works';
// works : any[];
featuredWorks : any[];
works$;
imageUrl: string;

  constructor(private firebaseService: FirebaseService) {
  }
  
  ngOnInit() {
    this.works$ = this.firebaseService.getWorks();
    
    
      
    
  }



  
  
}
