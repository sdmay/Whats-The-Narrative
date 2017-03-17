import { Register } from 'ts-node/dist';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { LoginService } from './login.service';
import { Router, CanActivate } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    
    user: any = {};

    constructor(
        private router: Router,
        private loginService: LoginService
    ) { }
    

    toggleLoginUser(username, pass): any {
        this.user = { "name": username, "pass": pass };
        console.log(this.user);
        this.loginService.loginUser(this.user)
        .subscribe(res => {
            this.redirect();
        });
    }
     private redirect(): void {
        this.router.navigate([ '/dashboard' ]); //use the stored url here
    }
}
