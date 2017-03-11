import { Component, OnInit } from '@angular/core';
import { Trending } from './trending';
import { TrendingService } from './trending.service';

@Component({
    moduleId: module.id,
    selector: 'trending',
    templateUrl: './trending.component.html'
})

export class TrendingComponent implements OnInit {
    trends: Trending[] = [];

    constructor(private trendingService: TrendingService) { }

    getTrending(): void {
        this.trendingService
            .getTrending()
            .then(trends => this.trends = trends);
            console.log(this.trends);
    }
    ngOnInit(): void {
        this.getTrending();
    }
}
