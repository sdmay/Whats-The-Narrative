import { Component, OnInit } from '@angular/core';

import { PoliticsService } from './politics.service';
import { Story } from '../../shared/types/story-type';

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class PoliticsComponent implements OnInit {
    private stories: Story[];

    constructor(private politicsService: PoliticsService) {}

    ngOnInit(): void {
        this.toggleGetPolitics();
    }

    private toggleGetPolitics(): void {
        this.politicsService.getPolitics().subscribe(
            stories => this.stories = stories
        );
    }
}
