import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomeComponent } from './home/home.component';
import { NewsLetterComponent } from './footer/newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './index/trending/trending.component';
import { PoliticsComponent } from './index/politics/politics.component';
import { PeopleComponent } from './index/people/people.component';
import { LeftWingFeedComponent } from './home/left-wing-feed/left-wing-feed.component';
import { RightWingFeedComponent } from './home/right-wing-feed/right-wing-feed.component';
import { MoneyComponent } from './index/money/money.component';
import { HealthComponent } from './index/health/health.component';
import { AboutComponent } from './index/about/about.component';
import { TeamComponent } from './index/team/team.component';
import { ContactComponent } from './index/contact/contact.component';
import { SignupComponent } from './index/signup/signup.component';
import { SigninComponent } from './index/signin/signin.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

// Services
import { NewsLetterService } from './shared/observables/newsletter.service';
import { DataComponent } from './shared/providers/data.component';
import { SearchResultsService } from './search-results/search-results.service';
import { SignInService } from './index/signin/sign-in.service';
import { StoriesService } from './shared/observables/stories.service';
import { GetTweetsService } from './shared/observables/get-tweets.service';
import { AuthenicationControl } from './shared/authenication/authenication-control';
import { SignUpService } from './index/signup/signup.service';
import { SaveArticleService } from './shared/observables/save-article-service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        JsonpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        HomeComponent,
        NewsLetterComponent,
        FooterComponent,
        TrendingComponent,
        PoliticsComponent,
        PeopleComponent,
        LeftWingFeedComponent,
        RightWingFeedComponent,
        SearchResultsComponent,
        MoneyComponent,
        HealthComponent,
        AboutComponent,
        TeamComponent,
        ContactComponent,
        SignupComponent,
        DashBoardComponent,
        SigninComponent
    ],
    providers: [
        DataComponent,
        NewsLetterService,
        GetTweetsService,
        SearchResultsComponent,
        SearchResultsService,
        StoriesService,
        AuthenicationControl,
        SignInService,
        SignUpService,
        SaveArticleService
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppModule { }
