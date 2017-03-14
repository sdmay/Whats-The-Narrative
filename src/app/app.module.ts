import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomeComponent } from './home/home.component';
import { NewsLetterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { SavedComponent } from './saved/saved.component';
import { TrendingComponent } from './index/trending/trending.component';
import { TopicsComponent } from './index/topics/topics.component';
import { PoliticsComponent } from './index/politics/politics.component';
import { PeopleComponent } from './index/people/people.component';
import { LeftWingFeedComponent } from './home/left-wing-feed/left-wing-feed.component';
import { RightWingFeedComponent } from './home/right-wing-feed/right-wing-feed.component';
import { LoginComponent } from './login/login.component';


// Services
import { RegisterService } from './register/register.service';
import { NewsLetterService } from './newsletter/newsletter.service';
import { TrendingService } from './index/trending/trending.service';
import { LeftWingFeedService } from './home/left-wing-feed/left-wing-feed.service';
import { RightWingFeedService } from './home/right-wing-feed/right-wing-feed-service';
import { DataComponent } from './shared/providers/data.component';
import { SearchResultsService } from './search-results/search-results.service';
import { LoginService } from './login/login.service';



const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'saved', component: SavedComponent },
    { path: 'trending', component: TrendingComponent },
    { path: 'topics', component: TopicsComponent },
    { path: 'politics', component: PoliticsComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'searchresults', component: SearchResultsComponent },
    { path: 'login', component: LoginComponent },
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        // AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        HomeComponent,
        NewsLetterComponent,
        FooterComponent,
        RegisterComponent,
        IndexComponent,
        SavedComponent,
        TrendingComponent,
        TopicsComponent,
        PoliticsComponent,
        PeopleComponent,
        LeftWingFeedComponent,
        RightWingFeedComponent,
        SearchResultsComponent,
        LoginComponent
    ],
    providers: [
        DataComponent,
        TrendingService,
        RegisterService,
        NewsLetterService,
        LeftWingFeedService,
        RightWingFeedService,
        SearchResultsComponent,
        SearchResultsService,
        LoginService
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppModule { }
