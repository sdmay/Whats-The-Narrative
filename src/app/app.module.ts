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
import { NewsLetterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { SavedComponent } from './saved/saved.component';
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
import { NewsLetterService } from './newsletter/newsletter.service';
import { LeftWingFeedService } from './home/left-wing-feed/left-wing-feed.service';
import { RightWingFeedService } from './home/right-wing-feed/right-wing-feed-service';
import { DataComponent } from './shared/providers/data.component';
import { SearchResultsService } from './search-results/search-results.service';
import { LoginService } from './login/login.service';
import { StoriesService } from './shared/observables/stories.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'saved', component: SavedComponent },
    { path: 'trending', component: TrendingComponent },
    { path: 'politics', component: PoliticsComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'searchresults', component: SearchResultsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'money', component: MoneyComponent },
    { path: 'health', component: HealthComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
];


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        JsonpModule
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
        LeftWingFeedService,
        RightWingFeedService,
        SearchResultsComponent,
        SearchResultsService,
        LoginService,
        StoriesService
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppModule { }
