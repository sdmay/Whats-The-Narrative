import { Component, OnInit } from '@angular/core';

import { Story } from '../../shared/types/story-type';
import { TrendingService } from './trending.service';

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class TrendingComponent implements OnInit {
    private stories: Story[];

    constructor(private trendingService: TrendingService) { }

    ngOnInit(): void {
        this.toggleGetTrending();
    }

    private toggleGetTrending(): void {
        this.trendingService.getTrending().subscribe(
            stories => this.stories = stories
        );
    }
}
