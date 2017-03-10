"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var saved_component_1 = require("./saved/saved.component");
var core_1 = require("@angular/core");
var header_component_1 = require("./header/header.component");
var search_component_1 = require("./search/search.component");
var home_component_1 = require("./home/home.component");
var newsletter_component_1 = require("./newsletter/newsletter.component");
var footer_component_1 = require("./footer/footer.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        directives: [
            header_component_1.HeaderComponent,
            search_component_1.SearchComponent,
            home_component_1.HomeComponent,
            newsletter_component_1.NewsLetterComponent,
            footer_component_1.FooterComponent,
            saved_component_1.SavedComponent
        ]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map