import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;

  constructor(
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }
  
  async resetPassword()
  {
    if(this.email)
    {
      const loading = await this.loadingCtrl.create({
        message: 'Loading Please wait...',
        spinner: 'crescent',
        showBackdrop: true
      });
      
      loading.present();
      
      this.afauth.sendPasswordResetEmail(this.email)
      .then(()=> {
        loading.dismiss();
        console.log('SUCCESS!');
        this.toast('Please check your email!', 'success');
        this.router.navigate(['/login']);
      })
      .catch((error)=> {
        loading.dismiss();
        console.log(error.message);
        this.toast(error.message, 'danger');
      })
      
    } else {
      console.log('Please Enter your Email address!');
      this.toast('Please Enter your Email address!', 'danger');
    }
  } // ResetPassword
  
  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  } // TOAST
  
}
