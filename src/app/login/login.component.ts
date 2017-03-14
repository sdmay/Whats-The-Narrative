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

    constructor(
        private formBuilder: FormBuilder,
        private loginSevice: LoginService
    ) { }

    toggleLoginUser(): void {
        // if no username or passsword is enter stop the function.
        if (!this.loginForm.value.name || !this.loginForm.value.password) {
            return;
        }

        const userObject = this.loginForm.value;
        this.loginSevice.loginUser(userObject).subscribe();
    }

}
