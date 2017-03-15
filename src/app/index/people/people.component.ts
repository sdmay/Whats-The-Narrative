import { Component, OnInit } from '@angular/core';
import { People } from './people-type';
import { PeopleService } from './people.service';

@Component({
    moduleId: module.id,
    selector: 'people',
    styleUrls: ['people.component.css'],
    templateUrl: './people.component.html'
})



export class PeopleComponent implements OnInit {
    private peopleStories: any[] = [];

    constructor(private peopleService: PeopleService) { }

    ngOnInit(): void {
        this.toggleGetPeople();
    }

    private toggleGetPeople(): void {
        this.peopleService.getPeopleStories().subscribe(
            peopleStories => this.peopleStories = peopleStories
        );
    }
}
