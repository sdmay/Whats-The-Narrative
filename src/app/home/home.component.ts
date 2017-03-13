import { Component } from '@angular/core';

import { LeftWingFeedComponent } from './left-wing-feed/left-wing-feed.component';
import { RightWingFeedComponent } from './right-wing-feed/right-wing-feed.component';


@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    entryComponents: [
        LeftWingFeedComponent,
        RightWingFeedComponent
    ]
})

export class HomeComponent {

}