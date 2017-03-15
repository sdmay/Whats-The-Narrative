import { Component, OnInit } from '@angular/core';

import { Health } from './health-type';
import { HealthService } from './health.service';

@Component({
    moduleId: module.id,
    selector: 'health',
    styleUrls: ['health.component.css'],
    templateUrl: './health.component.html'
})

export class HealthComponent implements OnInit {
    private title:string  = 'Trending Health Stories';
    private healthStories: any[] = [];

    constructor(private healthService: HealthService) { }

    ngOnInit(): void {
        this.toggleGetHealthStories();
    }

    private toggleGetHealthStories(): void {
        this.healthService.getHealthStories().subscribe(
            healthStories => this.healthStories = healthStories
        );
    }
}
