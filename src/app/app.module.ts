import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FirebaseService } from './services/firebase.service';

//Extra sservieces
import { CookieService } from 'ngx-cookie-service';

// Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { AddWorkComponent } from './add-work/add-work.component';

// Pipes
import { FeaturedPipe } from './pipes/featured.pipe';
import { OrderPipe } from './pipes/order.pipe';

const usfRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'add-work',
    component: AddWorkComponent
  }
]


const mya = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCdP_SqY7tEGKGw2ZxaE19eKXD1qqla4q8",
    authDomain: "mya-pf.firebaseapp.com",
    databaseURL: "https://mya-pf.firebaseio.com",
    projectId: "mya-pf",
    storageBucket: "mya-pf.appspot.com",
    messagingSenderId: "505042028471"
  }
};


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    WorksComponent,
    AboutComponent,
    ContactComponent,
    BannerComponent,
    FeaturedPipe,
    AddWorkComponent,
    OrderPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(mya.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(usfRoutes),

  ],
  providers: [
    FirebaseService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
