import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { TwitterService } from 'ng2-twitter';


@Injectable()
export class LwTweetService {
    // constructor(private rightWingTwitterFeed: RightWingTwitterFeed,
    // private http: Http) { }
    // getAllTweets(): any{
    //     return this.http.get('/twitterfeed').map(res => res.json());
 
    // }
}



// private twit = new Twitter({
//     consumer_key: 'dv1iRBGxLYjyKn41qpvayuI8U',
//     consumer_secret: 'Der5Hk7WdnyYiFwCmRbx9akiFlAANbHdXT9ZVS4jYaNWU4w9E1',
//     access_token_key: "	249584013-wk8Vlc2jWdc95EqlOT7WvikOpH2Qe81YjKUb0Xxf",
//     access_token_secret: "	hlGBlj3nB8VMpAfG6euyeZGs6o0pgW43wdfcSWtBM2faz"
// });
//     private headers = new Headers({ 'Content-Type': 'application/json' });
//     constructor(private http: Http
//     ) { }

//     getTweets(): any {
//     return this.twit.get('search/tweets')
//                .then(response => response.json().data)
//                .catch(this.handleError);
//   }

//     private handleError(error: any): Promise<any> {
//         console.error('An error occurred', error);
//         return Promise.reject(error.message || error);
//     }

