import { Component, OnInit } from '@angular/core';

import { LeftWingFeedService } from './left-wing-feed.service';

import {Tweet} from '../shared/tweet';



@Component({
    moduleId: module.id,
    selector: 'lw-feed',
    templateUrl: './left-wing-feed.component.html',
    styleUrls: ['./left-wing-feed.component.css']
})

export class LeftWingFeedComponent implements OnInit {
    tweets: any[];


    constructor(private leftWingFeedService: LeftWingFeedService ) {}

    ngOnInit(): void {
        this.leftWingFeedService.getTweets().subscribe(
            tweets => this.tweets = tweets
        );
    }

}