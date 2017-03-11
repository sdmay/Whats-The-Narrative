import { Router, Request, Response, NextFunction } from "express";
import 'rxjs/add/operator/toPromise';
import { TwitterService } from 'ng2-twitter';

export class RightWingTwitterFeed {
//     constructor(private twitter: TwitterService){ }
// result=""
//     getTweets(): any{
//     this.twitter.get(
//       'https://api.twitter.com/1.1/statuses/home_timeline.json',
//       {
//         count: 5
//       },
//       {
//         consumerKey: 'dv1iRBGxLYjyKn41qpvayuI8U',
//     consumerSecret: 'Der5Hk7WdnyYiFwCmRbx9akiFlAANbHdXT9ZVS4jYaNWU4w9E1'
//       },
//       {
//         token: "249584013-wk8Vlc2jWdc95EqlOT7WvikOpH2Qe81YjKUb0Xxf",
//     tokenSecret: "hlGBlj3nB8VMpAfG6euyeZGs6o0pgW43wdfcSWtBM2faz"
//       }
//   ).subscribe((res)=>{
//       this.result = res.json().map(tweet => tweet.text);
//   });
//     }
    // return this.getTweets()
}