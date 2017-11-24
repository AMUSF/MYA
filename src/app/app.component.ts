import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const footerH = document.getElementById('footer').offsetHeight;
    document.body.style.marginBottom = footerH + 'px';
  }
}
