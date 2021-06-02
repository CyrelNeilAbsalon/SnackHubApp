import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
import { FormsModule } from '@angular/forms';
 
//FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

// AUTH SERVICE
import { AuthService } from './services/auth.service';

// AUTH GUARD
import { AuthGuard } from './guards/auth.guard';

import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  BrowserModule,
  IonicModule.forRoot(),
  AppRoutingModule,
  FormsModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireAuthModule,
  AngularFirestoreModule,
  HttpClientModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    Storage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
