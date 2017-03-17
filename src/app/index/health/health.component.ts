import { Component, OnInit } from '@angular/core';

import { Story } from '../../shared/types/story-type';
import { HealthService } from './health.service';

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class HealthComponent implements OnInit {
    private stories: Story[];

    constructor(private healthService: HealthService) { }

    ngOnInit(): void {
        this.toggleGetHealthStories();
    }

    private toggleGetHealthStories(): void {
        this.healthService.getHealthStories().subscribe(
            stories => this.stories = stories
        );
    }
}
