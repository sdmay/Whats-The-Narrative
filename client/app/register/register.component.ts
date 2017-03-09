import { Register } from 'ts-node/dist';
import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';


import { RegisterService } from "./register.service";

@Component({
  moduleId: module.id,
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  public loginForm = this.fb.group({
    name: ["", Validators.required],
    password: ["", Validators.required]
  });

  constructor(
    public fb: FormBuilder,
    private registerService: RegisterService
  ) { }

  doLogin(event) {
    // need to prevent form from submitting.
    // need to find better solution
    event.preventDefault();
    let userObject = this.loginForm.value;
    // Observables are lazy. Need to subscribe to the http request to hit the server.
    this.registerService.registerUser(userObject).subscribe();
  }
}

