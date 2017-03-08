import { Component } from "@angular/core";


@Component({
    moduleId: module.id,
    selector: "register",
    templateUrl: "./register.component.html"
    // styleUrls: ["./newsletter.component.css"]
})

export class RegisterComponent {
    firstName: string = "";
    password: string = "";

    update() {
        console.log(this.firstName, this.password);
    }
}