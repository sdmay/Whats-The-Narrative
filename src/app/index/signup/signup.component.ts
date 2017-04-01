import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from "./signup.service";
import { Http, Response } from '@angular/http'; // required for getting products from JSON file
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // required by the .map method

import { IQuiz } from './qaa';



@Component({
    moduleId: module.id,
    selector: 'signup',
    styleUrls: ['signup.component.css'],
    templateUrl: './signup.component.html'
})

export class SignupComponent implements OnInit {
    public loginForm = this.fb.group({
        name: ["", Validators.required],
        password: ["", Validators.required]
    });

    questions: any = [];
    user: any = {};
private _quizQAUrl = 'assets/qaa.json';
  private _quiz: IQuiz[];
  private _answers: Array<string> = [];

  errorMessage: string;
  questionIndex: number = 1;
  selectedOptions: Array<string> = [];
  activeOptions = document.getElementsByClassName('active');
  quizScore: number = 0;
    constructor(
        private _quizService: SignUpService,
        private signUpService: SignUpService,
        private _http: Http,
        private router: Router,
        public fb: FormBuilder,
    ) { }

    private doLogin(username, pass) {
        this.user = { "name": username, "pass": pass };
        this.signUpService.registerUser(this.user).subscribe(
            response => this.wasTheRegistrationSuccessful(response)
        );
    }

    private wasTheRegistrationSuccessful(response): void {
        if (response.status === 200) {
            this.router.navigate(['signin']);
        }
    }
  // get the list of the questions and answers as an observable
  getQAAList(): Observable<IQuiz[]> {
    return this._http.get(this._quizQAUrl)
      .map(response => <IQuiz[]>response.json().quizData)
  }

  // selected options
  selected(elem: any) {
    elem.classList.toggle('active'); // toggles "active" CSS class on elements that the user clicks on
    if (this.activeOptions.length > 1) {
      elem.classList.toggle('active');
    }
    this.selectedOptions.length = 0;
    for (let i = 0; i < this.activeOptions.length; i++) {
      this.selectedOptions.push(this.activeOptions[i].innerHTML);
    }
  }

  // next question function
  nextQuestion() {
    // if (this.activeOptions.length < 1) {
    //   // elem.classList.toggle('active');
    //   alert("ANSWER")
    //   return false;
    // }
    if (this.questionIndex <= this._quiz.length) {
      for (let i = this.questionIndex - 1; i < this.questionIndex; i++) {
        let selectedAnswers = String(this.selectedOptions);
        console.log(selectedAnswers)
        let correctAnswer = String(this._quiz[i].answer);
        console.log(correctAnswer)
        if (selectedAnswers === correctAnswer) {
          this.quizScore++;
        }
        if (this.questionIndex === this._quiz.length) {
          this.calculateScore();
        }
      }
      this.questionIndex++;
      this.selectedOptions.length = 0;
    }
  }

  calculateScore() {
    this.quizScore = (this.quizScore / this._quiz.length) * 100;
    this._quizService.quizDone(true);
    this._quizService.quizScore(this.quizScore)
    console.log(this.quizScore);
    if (this.quizScore > 50) {
      console.log("Lean Right")
    }
    else {
      console.log("Lean Left")
    }

  }

  ngOnInit(): void {
    this.getQAAList()
      .subscribe(
      quiz => this._quiz = quiz, // set our local _quiz array equal to the IQuiz[] data which arrive from our data stream
      error => this.errorMessage = <any>error);
  }
   

}
