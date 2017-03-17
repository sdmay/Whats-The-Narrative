import { Component, OnInit } from '@angular/core';

import { Story } from '../../shared/types/story-type';
import { PeopleService } from './people.service';

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class PeopleComponent implements OnInit {
    private stories: Story[];

    constructor(private peopleService: PeopleService) { }

    ngOnInit(): void {
        this.toggleGetPeople();
    }

    private toggleGetPeople(): void {
        this.peopleService.getPeopleStories().subscribe(
            stories => this.stories = stories
        );
    }
}
