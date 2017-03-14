import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataComponent } from '../shared/providers/data.component';
import { SearchResultsComponent } from '../search-results/search-results.component';


@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {
    userInputSearchTerm: string = '';

    constructor(
        private router: Router,
        private dataComponent: DataComponent,
        private searchResultsComponent: SearchResultsComponent
    ) { }

    toggleUserSearch() {
        // break the function if there is no input in the input field
        if (!this.userInputSearchTerm) {
            return;
        }
        // change the variable property in the data component.
        this.dataComponent.userSearchData = this.userInputSearchTerm;
        // clear the input field
        this.userInputSearchTerm = '';
        if (this.router.url === '/searchresults') {
            // TODO: FIX THIS!
            this.router.navigate(['']);
            setTimeout(() => {
                this.router.navigate(['searchresults']);
            }, 1);
        } else {
            this.router.navigate(['searchresults']);
        }
    }
}
