import { SavedComponent } from './saved/saved.component';
import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { NewsLetterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'my-app',
    templateUrl: "app/app.component.html",
    directives: [
    HeaderComponent, 
    SearchComponent,
    HomeComponent,
    NewsLetterComponent,
    FooterComponent, 
    SavedComponent
    ]
})

export class AppComponent {

}