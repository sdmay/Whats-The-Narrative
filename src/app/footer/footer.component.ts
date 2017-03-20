import { Component } from '@angular/core';

import { NewsLetterComponent } from './newsletter/newsletter.component';


@Component({
    moduleId: module.id,
    selector: 'footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    entryComponents: [NewsLetterComponent]
})

export class FooterComponent {

}