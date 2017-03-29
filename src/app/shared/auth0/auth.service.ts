import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';
// Avoid name not found warnings
// const Auth0Lock = require('auth0-lock').default;
// import {Auth} from './shared/auth0/auth.service';
// import { Auth0Lock } from 'auth0-lock';
// declare var require: any;
// const Auth0Lock = require('auth0-lock').default;
import Auth0Lock from 'auth0-lock';
// const Auth0Lock = require('auth0-lock').default;
@Injectable()
export class Auth {
  Auth0Lock: any;

  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});

  constructor() {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
      console.log(authResult)
    });
  }

  public login() {
    this.lock.show();
  };

  public authenticated() {
    
    return tokenNotExpired();
  };

  public logout() {
    localStorage.removeItem('id_token');
  };

}
