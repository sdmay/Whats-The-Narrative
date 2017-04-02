import { Component } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'my-error-page',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
})

export class ErrorComponent {

    private goBackToTheLastPage() {
        window.history.back();
    }

}