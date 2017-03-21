import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, appRoutingProviders } from './app-routing.module';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import Auth0Lock from 'auth0-lock';
import {Auth} from './shared/auth0/auth.service';


// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './header/search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HomeComponent } from './home/home.component';
import { NewsLetterComponent } from './footer/newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { TrendingComponent } from './index/trending/trending.component';
import { PoliticsComponent } from './index/politics/politics.component';
import { PeopleComponent } from './index/people/people.component';
import { LeftWingFeedComponent } from './home/left-wing-feed/left-wing-feed.component';
import { RightWingFeedComponent } from './home/right-wing-feed/right-wing-feed.component';
import { LoginComponent } from './login/login.component';
import { MoneyComponent } from './index/money/money.component';
import { HealthComponent } from './index/health/health.component';
import { AboutComponent } from './index/about/about.component';
import { TeamComponent } from './index/team/team.component';
import { ContactComponent } from './index/contact/contact.component';
import { SignupComponent } from './index/signup/signup.component';
import { SigninComponent } from './index/signin/signin.component';
import { DashBoardComponent } from './dashboard/dashboard.component';

// Services
import { RegisterService } from './register/register.service';
import { NewsLetterService } from './shared/observables/newsletter.service';
import { DataComponent } from './shared/providers/data.component';
import { SearchResultsService } from './search-results/search-results.service';
import { LoginService } from './login/login.service';
import { StoriesService } from './shared/observables/stories.service';
import { GetTweetsService } from './shared/observables/get-tweets.service';

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
        RegisterComponent,
        IndexComponent,
        TrendingComponent,
        PoliticsComponent,
        PeopleComponent,
        LeftWingFeedComponent,
        RightWingFeedComponent,
        SearchResultsComponent,
        LoginComponent,
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
        RegisterService,
        NewsLetterService,
        GetTweetsService,
        SearchResultsComponent,
        SearchResultsService,
        LoginService,
        StoriesService,
        AUTH_PROVIDERS,
        appRoutingProviders,
        Auth
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppModule { }
