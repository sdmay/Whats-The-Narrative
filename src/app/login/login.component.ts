import { Register } from 'ts-node/dist';
import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import 'rxjs/add/operator/toPromise';
// import { LoginService } from './login.service';
import { Router, CanActivate } from '@angular/router';
import {Auth} from '../shared/auth0/auth.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

// TODO: fix this to use the NgModels that are in the template.
export class LoginComponent {
    
    user: any = {};

    constructor(
        // private router: Router,
        // private loginService: LoginService,
        private auth: Auth
    ) { }
    

    // toggleLoginUser(username, pass): any {
    //     this.user = { "name": username, "pass": pass };
    //     console.log(this.user);
    //     this.loginService.loginUser(this.user)
    //     .subscribe(res => {
    //         // TODO: this should only redirect to the dashboard if the login was successful.
    //         this.redirect();
    //     });
    // }
    //  private redirect(): void {
    //     this.router.navigate([ '/dashboard' ]); //use the stored url here
    // }
}
