import { Component, OnInit } from '@angular/core';


import { PoliticsService } from './politics.service';
import { Politics } from './politics-type';


@Component({
    moduleId: module.id,
    selector: 'politics',
    styleUrls: ['./politics.component.css'],
    templateUrl: './politics.component.html'
})

export class PoliticsComponent implements OnInit {
    private politicsStories: any[];

    constructor(private politicsService: PoliticsService) {}

    ngOnInit(): void {
        this.toggleGetPolitics();
    }

    private toggleGetPolitics(): void {
        this.politicsService.getPolitics().subscribe(
            politics => this.politicsStories = politics
        );
    }
}
