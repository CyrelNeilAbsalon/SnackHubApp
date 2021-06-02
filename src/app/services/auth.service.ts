import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$: Observable<User>;
  user: User;
  
  constructor(
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private router: Router,
    private LoadingCtrl: LoadingController,
    private toastr: ToastController
  ) {
    this.user$ = this.afauth.authState.pipe(
      switchMap(user=> 
      {
        if(user) 
        {
          return this.afs.doc(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
        
      })
    )
  } // end of constructor
  
  async login(email, pass)
  {
    const loading = await this.LoadingCtrl.create({
      message:'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    });
    
    loading.present();
  
    this.afauth.signInWithEmailAndPassword(email, pass)
    .then((data)=> {
      if(!data.user.emailVerified)
      {
        loading.dismiss();
        this.toast('Please verify your email address!', 'danger');
        this.logout();
      } else {
        loading.dismiss();
        this.router.navigate(['/']);
      }
    })
  } // LOGIN
  
  
  logout()
  {
    this.afauth.signOut().then(()=> {
      this.router.navigate(['/login']);
    });
  } // LOGOUT
  
  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 2000
    });
    toast.present();
  } // end of toast
}