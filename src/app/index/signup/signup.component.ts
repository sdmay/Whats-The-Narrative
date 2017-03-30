import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SignUpService } from "./signup.service";



@Component({
    moduleId: module.id,
    selector: 'signup',
    styleUrls: ['signup.component.css'],
    templateUrl: './signup.component.html'
})

export class SignupComponent {
    questions: any = [];
    user: any = {};

    public surveyJSON = {
        pages: [
            {
                name: "page1",
                questions: [
                    {
                        type: "radiogroup",
                        choices: [{ value: "1", text: "Yes" },
                        { value: "0", text: "No" }],
                        isRequired: true,
                        name: "Do you like Trump?"
                    },
                    {
                        type: "radiogroup",
                        choices: [{ value: "1", text: "Yes" },
                        { value: "0", text: "No" }],
                        isRequired: true,
                        name: "For the war on drugs?"
                    },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "For the war  on terror?" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question9" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question8" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question7" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question6" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question5" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question4" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question3" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question2" },
                    { type: "radiogroup", choices: [{ value: "1", text: "Yes" }, { value: "0", text: "No" }], isRequired: true, name: "question1" }]
            }]
    }

    constructor(
        private signUpService: SignUpService, private router: Router
    ) { }

    private doLogin(username, pass) {
        this.user = { "name": username, "pass": pass };
        this.signUpService.registerUser(this.user).subscribe(
            response => this.wasTheRegistrationSuccessful(response)
        );
    }

    private wasTheRegistrationSuccessful(response): void {
        if (response.status === 200) {
            this.router.navigate(['signin']);
        }
    }

    ngOnInit(): any {
        //  .pages["0"].questions["0"].choices[1].text
        this.questions = this.surveyJSON.pages[0].questions;
    }

}
