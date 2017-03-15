import { Component, OnInit } from '@angular/core';

import { Money } from './money-type';
import { MoneyService } from './money.service';

@Component({
    moduleId: module.id,
    selector: 'money',
    styleUrls: ['money.component.css'],
    templateUrl: './money.component.html'
})

export class MoneyComponent implements OnInit {
    private title:string  = 'Trending Money Stories';
    private moneyStories: any[] = [];

    constructor(private moneyService: MoneyService) { }

    ngOnInit(): void {
        this.toggleGetMoneyStories();
    }

    private toggleGetMoneyStories(): void {
        this.moneyService.getMoneyStories().subscribe(
            moneyStories => this.moneyStories = moneyStories
        );
    }
}
