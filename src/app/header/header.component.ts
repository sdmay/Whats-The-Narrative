import { Component } from '@angular/core';

import {SearchComponent} from './search/search.component';


@Component({
    moduleId: module.id,
    selector: 'my-header',
    entryComponents: [SearchComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {

}