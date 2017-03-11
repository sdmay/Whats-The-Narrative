import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { NewsLetterComponent } from "./newsletter/newsletter.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterComponent } from "./register/register.component";
import { IndexComponent } from './index/index.component';
import { SavedComponent } from './saved/saved.component';
import { TrendingComponent } from './index/trending/trending.component';
import { TopicsComponent } from './index/topics/topics.component';
import { PoliticsComponent } from './index/politics/politics.component';
import { PeopleComponent } from './index/people/people.component';
import { LwTwitterFeedComponent } from './home/twitter/lw-twitter-feed.component';
import { TwitterService } from 'ng2-twitter';

//Services
import { RegisterService } from "./register/register.service";
import { NewsLetterService } from './newsletter/newsletter.service';
import { TrendingService } from './index/trending/trending.service';
import { LwTweetService } from './home/twitter/lw-twitter-feed.service';
import {RightWingTwitterFeed} from '../../server/routes/twitter-api'


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'saved', component: SavedComponent },
    { path: 'trending', component: TrendingComponent },
    { path: 'topics', component: TopicsComponent },
    { path: 'politics', component: PoliticsComponent },
    { path: 'people', component: PeopleComponent }
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
        LwTwitterFeedComponent,
        
    ],
    providers: [
        TrendingService,
        RegisterService,
        NewsLetterService,
        LwTweetService,
        TwitterService,
        RightWingTwitterFeed
        
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [RouterModule,
    
    ]
})
export class AppModule {}
