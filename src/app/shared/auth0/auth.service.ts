import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig } from './auth.config';
// Avoid name not found warnings
// const Auth0Lock = require('auth0-lock').default;
import { Auth0Lock } from 'auth0-lock';
@Injectable()
export class Auth {
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});

  constructor() {
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
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
