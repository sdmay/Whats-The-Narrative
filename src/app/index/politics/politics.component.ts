import { Component, OnInit } from '@angular/core';

import { StoriesService } from '../../shared/observables/stories.service';
import { Story } from '../../shared/types/story-type';

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class PoliticsComponent implements OnInit {
    private apiUrl: string = '/api/mainnewssearch/politics';
    private stories: Story[];

    constructor(private storiesService: StoriesService) {}

    ngOnInit(): void {
        this.toggleGetPolitics();
    }

    private toggleGetPolitics(): void {
        this.storiesService.getStories(this.apiUrl).subscribe(
            stories => this.stories = stories
        );
    }
}
