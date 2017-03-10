import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Comment } from '../model/comment'
import  RightWingService  from './rightwing.service';

// Component decorator
@Component({
    selector: 'rw-box',
    templateUrl: "./rightwing.component.html"
//   styleUrls: ["./rightwing.component.css"]
    // No providers here because they are passed down from the parent component
})
// Component class
export class RightWingTweetComponent { 
    // Constructor
     constructor(
        private tweetService: RightWingService
        ){}

}