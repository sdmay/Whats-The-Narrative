import { Register } from 'ts-node/dist';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NewsLetterService } from '../../shared/observables/newsletter.service';

@Component({
    moduleId: module.id,
    selector: 'newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})


export class NewsLetterComponent {
    private signupemail: string = "";
    private signupname: string = "";

    constructor(
        private newsLetterService: NewsLetterService
    ) { }



    private newsLetter(event) {
        const userObject = {signupname: this.signupname, signupemail: this.signupemail};
        this.newsLetterService.registerUser(userObject).subscribe(
            response => this.wasTheNewsLetterSignUpSuccessful(response)
        );
        this.clearForm();
    }

    private wasTheNewsLetterSignUpSuccessful(response) {
        console.log(response);
    }


    private clearForm() {
        this.signupemail = "";
        this.signupname = "";
    }
}
