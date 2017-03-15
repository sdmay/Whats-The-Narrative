import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Tweet } from '../shared/tweet';


@Injectable()
export class LeftWingFeedService {
  private apiUrl = '/api/twitterfeed/leftwing';
  
  constructor(private http: Http) { }

  getTweets(): Observable<Tweet[]> {
    return this.http.get(this.apiUrl)
      .map(this.extractTweetData)
      .catch(this.handleError);
  }

  private extractTweetData(res: Response) {
    const body = res.json();
    console.log('left wing twitter results');
    console.log(body.statuses);
    return body.statuses || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}