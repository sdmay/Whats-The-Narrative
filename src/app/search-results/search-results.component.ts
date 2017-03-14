import { Component, OnInit } from '@angular/core';

import { DataComponent } from '../shared/providers/data.component';
import { SearchResultsService } from './search-results.service';

@Component({
    moduleId: module.id,
    selector: 'search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
    // TODO: give these proper types.
    userSearch: any;
    // TODO: give this a proper type we need to determine what needs to be displayed on the page.

    constructor(
        private dataComponent: DataComponent,
        private searchResultsService: SearchResultsService,
    ) {}

    ngOnInit(): void {
        this.getUsersSearch();
    }

    public getUsersSearch(): void {
        const userSearchData = this.dataComponent.userSearchData;
        this.searchResultsService.getUsersSearchFromServer(userSearchData);
    }
}