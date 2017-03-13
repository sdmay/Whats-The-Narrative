import { Component, OnInit } from '@angular/core';

import { RightWingFeedService } from './right-wing-feed-service';


@Component({
    moduleId: module.id,
    selector: 'rw-feed',
    templateUrl: './right-wing-feed.component.html',
    styleUrls: ['./right-wing-feed.component.css']
})

export class RightWingFeedComponent implements OnInit {
    tweets: any[];


    constructor(private rightWingFeedService: RightWingFeedService) { }

    ngOnInit(): void {
        this.rightWingFeedService.getTweets().subscribe(
            tweets => this.tweets = tweets
        );
    }

}