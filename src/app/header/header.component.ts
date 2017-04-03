import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthenicationControl } from "../shared/authenication/authenication-control";
import { DataComponent } from '../shared/providers/data.component';
import { SearchResultsComponent } from '../search-results/search-results.component';


@Component({
    moduleId: module.id,
    selector: 'my-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    private userSearchForm = this.formBuilder.group({
    userInputSearchTerm: ["", Validators.required]
  });

    constructor(
        private formBuilder: FormBuilder,
        private authenicationControl: AuthenicationControl, 
        private router: Router,
        private dataComponent: DataComponent,
        private searchResultsComponent: SearchResultsComponent
        )
    {}

    private logUserOut() {
        this.authenicationControl.removeJsonWebToken();
        this.router.navigate([""]);
    }

    private toggleUserSearch() {
        // break the function if there is no input in the input field
        if (!this.userSearchForm.value.userInputSearchTerm) {
            return;
        }
        // change the variable property in the data component.
        this.dataComponent.userSearchData = this.userSearchForm.value.userInputSearchTerm;
        // clear the input field
        this.userSearchForm.reset();
        if (this.router.url === '/searchresults') {
            this.searchResultsComponent.getUsersSearch();
        } else {
            this.router.navigate(['searchresults']);
        }
    }

}