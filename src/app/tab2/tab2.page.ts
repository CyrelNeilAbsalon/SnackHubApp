import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(
    private afauth: AngularFireAuth,
    private router: Router
  ) {}
  
  ngOnInit(){
  }

  logout() {
    this.afauth.signOut().then(()=> {
      this.router.navigate(['/login']);
    })
  }

}
