import { Register } from 'ts-node/dist';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { NewsLetterService } from './newsletter.service';

@Component({
    moduleId: module.id,
    selector: 'newsletter',
    templateUrl: './newsletter.component.html',
    styleUrls: ['./newsletter.component.css']
})


export class NewsLetterComponent {
    public signUpForm = this.fb.group({
        signupname: ['', Validators.required],
        signupemail: ['', Validators.required]
    });
    constructor(
        public fb: FormBuilder,
        private newsLetterService: NewsLetterService
    ) { }

    newsLetter(event) {
        event.preventDefault();
        const userObject = this.signUpForm.value;
        console.log(userObject);
        // Observables are lazy. Need to subscribe to the http request to hit the server.
        this.newsLetterService.registerUser(userObject).subscribe();

    }

}
