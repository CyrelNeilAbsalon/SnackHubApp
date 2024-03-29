import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedIn: boolean = false;
  constructor() { }

  isLoggedIn(): boolean {
    this.loggedIn = Boolean(window.sessionStorage.getItem('login'));
    // this.loggedIn = window.sessionStorage.getItem('login')=='true'?true:false;
    return this.loggedIn;
  }

  setLoggedIn() {
    // this.loggedIn = true;
    window.sessionStorage.setItem('login', 'true');
    this.loggedIn = true;
  }

  setLoggedOut() {
    // this.loggedIn = false;
    window.sessionStorage.setItem('login', 'false');
    this.loggedIn = false;
  }
}
