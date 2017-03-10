"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var forms_2 = require("@angular/forms");
// Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var search_component_1 = require("./search/search.component");
var home_component_1 = require("./home/home.component");
var newsletter_component_1 = require("./newsletter/newsletter.component");
var footer_component_1 = require("./footer/footer.component");
var register_component_1 = require("./register/register.component");
var index_component_1 = require("./index/index.component");
var saved_component_1 = require("./saved/saved.component");
//Services
var register_service_1 = require("./register/register.service");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'saved', component: saved_component_1.SavedComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot(appRoutes),
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_2.ReactiveFormsModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            search_component_1.SearchComponent,
            home_component_1.HomeComponent,
            newsletter_component_1.NewsLetterComponent,
            footer_component_1.FooterComponent,
            register_component_1.RegisterComponent,
            index_component_1.IndexComponent,
            saved_component_1.SavedComponent
        ],
        providers: [
            register_service_1.RegisterService
        ],
        bootstrap: [
            app_component_1.AppComponent
        ],
        exports: [router_1.RouterModule]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map