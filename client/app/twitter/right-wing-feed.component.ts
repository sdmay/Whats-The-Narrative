import { Component, OnInit } from '@angular/core';

import { Tweet } from './tweet';
import { TwitterService } from './twitter.service';
import { TwitterDateWithTimePipe } from './twitter-dates.pipe';

@Component({
  selector: 'rw-feed',
  templateUrl: 'right-wing-feed.component.html',
  styleUrls: ['right-wing-feed.component.css'],
  pipes: [TwitterDateWithTimePipe]
})

export class TweetsComponent implements OnInit {
  errorMessage: string;
  tweets: Tweet[];
  mode = 'Observable';

  constructor(private _TwitterService: TwitterService) { }

  ngOnInit() {
    this._TwitterService.getTweets()
      .subscribe(
         tweets => this.tweets = tweets,
         error =>  this.errorMessage = <any>error);
  }
}

// import { RightWingTwitterFeed } from '../../../server/routes/twitter-api';
// import { Component } from '@angular/core';
// import { Http, Response, RequestOptions, URLSearchParams } from '@angular/http';
// import { Observable } from 'rxjs/Rx';
// import 'rxjs/add/operator/map';

// @Component({
//   moduleId: module.id,
//   selector: 'rw-feed',
//   templateUrl: 'right-wing-feed.component.html',
//   styleUrls: ['right-wing-feed.component.css']
// })
// export class RightWingFeedComponent {
//   parameter: URLSearchParams = new URLSearchParams();
//   tweets: any;

//   constructor(public http: Http) { }

//   getTweets(searchTweet: string) {
//     event.preventDefault()
//     this.parameter.set('param1', searchTweet);
//     let requestOptions = new RequestOptions();
//     requestOptions.search = this.parameter;
//     console.log(requestOptions.search)

//     return this.http.get('http://localhost:3000/tweets', requestOptions)
//       .map((res: Response) => {
//         // console.log("POOL")
        
//         console.log(res.status)
        
//         res.json()
//       }).subscribe((res: any) => {
//         this.tweets = res;
//         console.log(this.tweets);
//       });
//   }
// }