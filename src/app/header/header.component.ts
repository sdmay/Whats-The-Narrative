import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { SearchComponent } from './search/search.component';

import { AuthenicationControl } from "../shared/authenication/authenication-control";


@Component({
    moduleId: module.id,
    selector: 'my-header',
    entryComponents: [SearchComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

    constructor(private authenicationControl: AuthenicationControl, private router: Router)
    { }

    private logUserOut() {
        console.log('test');
        this.authenicationControl.removeJsonWebToken();
        this.router.navigate([""]);
    }

}