import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Tweet } from '../types/tweet-type';


@Injectable()
export class GetTweetsService {
  constructor(private http: Http) {}

  getTweets(apiUrl): Observable<Tweet[]> {
    return this.http.get(apiUrl)
      .map(this.extractTweetData)
      .catch(this.handleError);
  }

  private extractTweetData(res: Response): Tweet[] {
    const tweets = [];
    const body = res.json();
    for (var i = 0; i < 5; i++) {
      tweets.push(body.statuses[i]);
    }
    console.log(body.statuses);
    return tweets;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}
