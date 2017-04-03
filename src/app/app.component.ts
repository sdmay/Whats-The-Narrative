import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    entryComponents: [
        HeaderComponent,
        HomeComponent,
        FooterComponent
    ]
})

export class AppComponent {
    
}
