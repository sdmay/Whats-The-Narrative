import { Component, OnInit } from '@angular/core';

import { GetTweetsService } from '../../shared/observables/get-tweets.service';
import { Tweet } from '../../shared/types/tweet-type';

@Component({
    moduleId: module.id,
    selector: 'rw-feed',
    templateUrl: './right-wing-feed.component.html',
    styleUrls: ['./right-wing-feed.component.css']
})

export class RightWingFeedComponent implements OnInit {
    private apiUrl: string = '/api/twitterfeed/rightwing';
    tweets: Tweet[] = [];


    constructor(private getTweetsService: GetTweetsService) { }

    ngOnInit(): void {
        this.getTweetsService.getTweets(this.apiUrl).subscribe(
            tweets => this.tweets = tweets
        );
    }

}
