import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { HomeComponent } from "./home/home.component";
import { NewsLetterComponent } from "./newsletter/newsletter.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterComponent } from "./register/register.component";
import { IndexComponent } from './index/index.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        SearchComponent,
        HomeComponent,
        NewsLetterComponent,
        FooterComponent,
        RegisterComponent, 
        IndexComponent
    ],
    bootstrap: [
        AppComponent
    ],
    exports: [RouterModule]
})

export class AppModule {

}
