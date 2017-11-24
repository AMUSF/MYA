import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseService {
  works: FirebaseListObservable < any[] > ;
  featuredWorks: FirebaseListObservable < any[] > ;
  about: FirebaseObjectObservable < any > ;
  work: FirebaseObjectObservable < any > ;
  imageUrl: string;

  constructor(private usfDB: AngularFireDatabase) {}

  getWorks() {
    return this.works = this.usfDB.list('/works', {
      query: {
        orderByChild: 'title',
      }
    });
  }

  getFeaturedWorks() {
    return this.featuredWorks = this.usfDB.list('/works', {
      query: {
        orderByChild: 'featured',
        equalTo: true
      }
    });
  }

  getAbout() {
    return this.about = this.usfDB.object('/about');
  }

  addWork(work) {
    return this.usfDB.list('/works').push(work);
  }

}





