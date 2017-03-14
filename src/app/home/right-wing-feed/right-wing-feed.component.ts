import { Component, OnInit } from '@angular/core';

import { RightWingFeedService } from './right-wing-feed-service';

import {Tweet} from '../shared/tweet';


@Component({
    moduleId: module.id,
    selector: 'rw-feed',
    templateUrl: './right-wing-feed.component.html',
    styleUrls: ['./right-wing-feed.component.css']
})

export class RightWingFeedComponent implements OnInit {
    tweets: Tweet[] = [];


    constructor(private rightWingFeedService: RightWingFeedService) { }

    ngOnInit(): void {
        this.rightWingFeedService.getTweets().subscribe(
            tweets => this.tweets = tweets
        );
    }

}
