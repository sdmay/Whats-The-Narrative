import { Component, OnInit } from '@angular/core';

import { Story } from '../../shared/types/story-type';
import { StoriesService } from '../../shared/observables/stories.service';

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class HealthComponent implements OnInit {
    private apiUrl: string = '/api/popularnewssearchs/health';
    private stories: Story[];

    constructor(private storiesService: StoriesService) { }

    ngOnInit(): void {
        this.toggleGetHealthStories();
    }

    private toggleGetHealthStories(): void {
        this.storiesService.getStories(this.apiUrl).subscribe(
            stories => this.stories = stories
        );
    }
}
