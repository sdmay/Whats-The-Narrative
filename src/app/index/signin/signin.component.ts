import { Component } from '@angular/core';
import { SignInService } from "./sign-in.service";
import { Router, CanActivate } from '@angular/router';

import { AuthenicationControl } from "../../shared/authenication/authenication-control";



@Component({
    moduleId: module.id,
    selector: 'signin',
    styleUrls: ['signin.component.css'],
    templateUrl: './signin.component.html'
})

export class SigninComponent {
    user: any = {};

    constructor(
        private router: Router,
        private signInService: SignInService,
        private authenicationControl: AuthenicationControl)
    {}

    toggleLoginUser(username, pass): any {
        this.user = { "name": username, "pass": pass };
        this.signInService.loginUser(this.user)
            .subscribe(
            res => this.redirect(res)
            );
    }
    private redirect(res): void {
        console.log(res);
        if (res.status === 200) {
            this.authenicationControl.storeJsonWebToken(res.token);
            this.router.navigate(['dashboard']);
        }
    }

}
