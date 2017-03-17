import { Component, OnInit } from '@angular/core';

import { Story } from '../../shared/types/story-type';
import { MoneyService } from './money.service';

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class MoneyComponent implements OnInit {
    private stories: Story[];

    constructor(private moneyService: MoneyService) { }

    ngOnInit(): void {
        this.toggleGetMoneyStories();
    }

    private toggleGetMoneyStories(): void {
        this.moneyService.getMoneyStories().subscribe(
            stories => this.stories = stories
        );
    }
}
