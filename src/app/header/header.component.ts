import { Component } from '@angular/core';
import { Register } from 'ts-node/dist';
import { SearchComponent } from './search/search.component';
import { Router, CanActivate } from '@angular/router';
import { Auth } from '../shared/auth0/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-header',
    entryComponents: [SearchComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    user: any = {};

    constructor(
        // private router: Router,
        // private loginService: LoginService,
        private auth: Auth
    ) { }
}
