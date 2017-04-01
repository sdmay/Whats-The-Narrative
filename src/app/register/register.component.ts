import { Component, DoCheck } from '@angular/core';

// Service
import { RegisterService } from './register.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  score: number = null;
  isQuizDone: boolean = false;

  constructor(private _quizService: RegisterService) { }

  // handleScore() triggered by sendScore Event, sent from Results Component
  handleScore(data: number) {
    this.score = data;
  }
  // Checks if Quiz is Finished
  ngDoCheck() {
    if (this._quizService.isQuizDone === true) {
      this.isQuizDone = this._quizService.isQuizDone;
    }
  }
}


// import { Register } from 'ts-node/dist';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
// import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// // TODO: do we need this anymore?
// // import { Survey } from 'survey-angular';
// import 'rxjs/Rx';

// import { RegisterService } from './register.service';
// import { QuizService } from './quiz/quiz.service';
// import { HelperService } from './quiz/helper.service';
// import { Option, Question, Quiz, QuizConfig} from './quiz/models/index';


