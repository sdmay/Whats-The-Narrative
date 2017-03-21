import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { Auth } from './shared/auth0/auth.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    providers: [Auth],
    templateUrl: './app.component.html',
    entryComponents: [
        HeaderComponent,
        SearchComponent,
        HomeComponent,
        FooterComponent
    ]
})

export class AppComponent {
    constructor(private auth: Auth) { }
}
