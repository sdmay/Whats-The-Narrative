import { Component, OnInit } from '@angular/core';

import { GetTweetsService } from '../../shared/observables/get-tweets.service';
import { Tweet } from '../../shared/types/tweet-type';

@Component({
    moduleId: module.id,
    selector: 'lw-feed',
    templateUrl: './left-wing-feed.component.html',
    styleUrls: ['./left-wing-feed.component.css']
})

export class LeftWingFeedComponent implements OnInit {
    private apiUrl: string = '/api/twitterfeed/leftwing';
    tweets: Tweet[];


    constructor(private getTweetsService: GetTweetsService) {}

    ngOnInit(): void {
        this.getTweetsService.getTweets(this.apiUrl).subscribe(
            tweets => this.tweets = tweets
        );
    }
}
