import { Component, OnInit } from '@angular/core';
import { Trending } from './trending';
import { TrendingService } from './trending.service';

@Component({
    moduleId: module.id,
    selector: 'trending',
    styleUrls: ['trending.component.css'],
    templateUrl: './trending.component.html'
})

export class TrendingComponent implements OnInit {
    private trends: any[] = [];

    constructor(private trendingService: TrendingService) { }

    ngOnInit(): void {
        this.getTrending();
    }

    private getTrending(): void {
        this.trendingService.getTrending().subscribe(
            trends => this.trends = trends
        );
    }

    
}
