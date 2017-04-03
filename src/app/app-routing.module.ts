import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrendingComponent } from './index/trending/trending.component';
import { MoneyComponent } from './index/money/money.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PeopleComponent } from './index/people/people.component';
import { PoliticsComponent } from './index/politics/politics.component';
import { HealthComponent } from './index/health/health.component';
import { AboutComponent } from './index/about/about.component';
import { ContactComponent } from './index/contact/contact.component';
import { TeamComponent } from './index/team/team.component';
import { SignupComponent } from './index/signup/signup.component';
import { SigninComponent } from './index/signin/signin.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { SavedComponent } from './saved/saved.component';
import { MyNewsFeedComponent } from './mynewsfeed/mynewsfeed.component';
import { ErrorComponent } from './error/error.component';

import { ClientAuthGuard } from './shared/authenication/client-auth-guard';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', pathMatch: 'full' },
    { path: 'trending', component: TrendingComponent },
    { path: 'politics', component: PoliticsComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'searchresults', component: SearchResultsComponent },
    { path: 'money', component: MoneyComponent },
    { path: 'health', component: HealthComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'error', component: ErrorComponent },
    // protected client side routes that the user must be logged in to access.
    { path: 'dashboard', component: DashBoardComponent, canActivate: [ClientAuthGuard] },
    { path: 'dashboard/saved', component: SavedComponent, canActivate: [ClientAuthGuard] },
    { path: 'dashboard/mynewsfeed', component: MyNewsFeedComponent, canActivate: [ClientAuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
