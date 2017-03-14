import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


import { Tweet } from '../shared/tweet';


@Injectable()
export class RightWingFeedService {
  private apiUrl = '/api/twitterfeed/rightwing';
  constructor(private http: Http) {}

  getTweets(): any {
    return this.http.get(this.apiUrl)
      .map(this.extractTweetData)
      .catch(this.handleError);
  }

  // TODO: determine if the we need this example anymore?

  //   getFollowers(): Observable<User[]> {
  //     return this.http.get('app/corc-followers')
  //                     .map(this.extractUserData)
  //                     .catch(this.handleError);
  //   }

  private extractTweetData(res: Response) {
    const body = res.json();
    console.log('right wing tweet results');
    console.log(body.statuses);
    return body.statuses || {};
  }

  // TODO: determine if we need this example anymore?

  //   private extractUserData(res: Response) {
  //     const body = res.json();
  //     let users: User[] = [];

  //     for (var item in body){
  //       let user = body[item];
  //       let userData: User = {
  //         name: user.name,
  //         location: user.location,
  //         profile_image_url: user.profile_image_url,
  //         created_at: user.created_at,
  //         followers_count: user.followers_count
  //       };
  //       users.push(userData);
  //     }
  //     return users;
  //   }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}