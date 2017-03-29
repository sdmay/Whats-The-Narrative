import { Register } from 'ts-node/dist';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from '@angular/forms';
// TODO: do we need this anymore?
// import { Survey } from 'survey-angular';
import 'rxjs/Rx';

import { RegisterService } from "./register.service";

@Component({
  moduleId: module.id,
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent  implements OnInit {
  public loginForm = this.fb.group({
    name: ["", Validators.required],
    password: ["", Validators.required]
  });

  questions: any = [];
  user: any = {};

    public surveyJSON = {
      pages:[
        {
          name:"page1",
          questions:[
            {
              type:"radiogroup",
              choices:[{value:"1",text:"Yes"},
              {value:"0",text:"No"}],
              isRequired:true,
              name:"Do you like Trump?"
            },
            {
              type:"radiogroup",
              choices:[{value:"1",text:"Yes"},
              {value:"0",text:"No"}],
              isRequired:true,
              name:"For the war on drugs?"
            },
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"For the war  on terror?"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question9"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question8"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question7"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question6"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question5"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question4"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question3"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question2"},
    {type:"radiogroup",choices:[{value:"1",text:"Yes"},{value:"0",text:"No"}],isRequired:true,name:"question1"}]}]}


  constructor(
    public fb: FormBuilder,
    private registerService: RegisterService
  ) { }

  doLogin(username, pass) {
    // need to prevent form from submitting.
    // need to find better solution
console.log(username);
console.log(pass);

this.user = {"name": username, "pass": pass}
    // event.preventDefault();
    // const userObject = this.loginForm.value;
    // console.log(this.loginForm)
    // console.log(userObject);
    // Observables are lazy. Need to subscribe to the http request to hit the server.
    this.registerService.registerUser(this.user).subscribe();
  }

 ngOnInit(): any {
  //  .pages["0"].questions["0"].choices[1].text
  this.questions = this.surveyJSON.pages[0].questions;
    }
}

