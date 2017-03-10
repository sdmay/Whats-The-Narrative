"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var twitter_service_1 = require("./twitter.service");
var twitter_dates_pipe_1 = require("./twitter-dates.pipe");
var TweetsComponent = (function () {
    function TweetsComponent(_TwitterService) {
        this._TwitterService = _TwitterService;
        this.mode = 'Observable';
    }
    TweetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._TwitterService.getTweets()
            .subscribe(function (tweets) { return _this.tweets = tweets; }, function (error) { return _this.errorMessage = error; });
    };
    return TweetsComponent;
}());
TweetsComponent = __decorate([
    core_1.Component({
        selector: 'rw-feed',
        templateUrl: 'right-wing-feed.component.html',
        styleUrls: ['right-wing-feed.component.css'],
        pipes: [twitter_dates_pipe_1.TwitterDateWithTimePipe]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof twitter_service_1.TwitterService !== "undefined" && twitter_service_1.TwitterService) === "function" && _a || Object])
], TweetsComponent);
exports.TweetsComponent = TweetsComponent;
var _a;
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
//# sourceMappingURL=right-wing-feed.component.js.map