import { Component } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: "register",
    templateUrl: "./register.component.html"
    // styleUrls: ["./newsletter.component.css"]
})
export class RegisterComponent {
public loginForm = this.fb.group({
    name: ["", Validators.required],
    password: ["", Validators.required]
  });
  
  constructor(public fb: FormBuilder) {}
  
  doLogin(event) {
      let formData = this.loginForm.value;
    console.log(event);
    console.log(this.loginForm.value);
    

  }
}

