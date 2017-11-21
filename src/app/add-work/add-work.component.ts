import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.scss']
})
export class AddWorkComponent implements OnInit {
  title: any = '';
  description: any = '';
  featured: boolean = false;
  imageUrl: any = '';


  constructor(
    private fbs: FirebaseService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  addWorkSubmit() {
    const work = {
      title: this.title,
      description: this.description,
      featured: this.featured,
      imageUrl: this.imageUrl,
    };

    this.fbs.addWork(work);

    this.router.navigate(['/']);

    work.title.value = '';
    work.description.value = '';
    work.featured = false;
    work.imageUrl.value = '';
  }
}


