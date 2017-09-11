import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HeaderComponent} from './shared/header.component';
import {AuthService} from './shared/auth.service';
import {AuthGuard} from './shared/auth.guard';
import {NotAuthGuard} from './shared/notauth.guard';
import {HomeComponent} from './home.component';
import {AlertsService} from './shared/alerts/alerts.service';
import {AlertsComponent} from './shared/alerts/alerts.component';
import { ExperienceComponent } from './experience/experience.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA7uEQKxfRbiwMuX7GkLWB01mwtP_IBiAw',
  authDomain: 'wave-2-us.firebaseapp.com',
  databaseURL: 'https://wave-2-us.firebaseio.com',
  projectId: 'wave-2-us',
  storageBucket: 'wave-2-us.appspot.com',
  messagingSenderId: '1080589429686'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertsComponent,
    HomeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [
    AuthService,
    AuthGuard,
    NotAuthGuard,
    AlertsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
