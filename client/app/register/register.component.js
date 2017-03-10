"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var register_service_1 = require("./register.service");
var RegisterComponent = (function () {
    function RegisterComponent(fb, registerService) {
        this.fb = fb;
        this.registerService = registerService;
        this.loginForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    RegisterComponent.prototype.doLogin = function (event) {
        // need to prevent form from submitting.
        // need to find better solution
        event.preventDefault();
        var userObject = this.loginForm.value;
        // Observables are lazy. Need to subscribe to the http request to hit the server.
        this.registerService.registerUser(userObject).subscribe();
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "register",
        templateUrl: "./register.component.html",
        styleUrls: ["./register.component.css"]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        register_service_1.RegisterService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map