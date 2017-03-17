import { Register } from 'ts-node/dist';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { LoginService } from './login.service';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginForm = this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required]
    });
user: any = {};
    constructor(
        private formBuilder: FormBuilder,
        private loginSevice: LoginService
    ) { }

    toggleLoginUser(username, pass): void {
        // if no username or passsword is enter stop the function.
        console.log("toggleLoginUser")
        this.user = {"name": username, "pass": pass};
        // const userObject = this.user;
        console.log(this.user);
        if (!this.user) {
            return;
        }
        this.loginSevice.loginUser(this.user).subscribe(res => {
            console.log(res);
        });
    }

}
