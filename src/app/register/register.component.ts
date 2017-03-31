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
// import { IQuiz } from './quiz/models/qaa'
// @Component({
//   moduleId: module.id,
//   selector: "register",
//   templateUrl: "./register.component.html",
//   styleUrls: ["./register.component.css"],
//   providers: [QuizService]
// })

// export class RegisterComponent  implements OnInit {
//   private _quizQAUrl = 'assets/qaa.json';
//   private _quiz: IQuiz[];
//   private _answers: Array<string> = [];

//   errorMessage: string;
//   questionIndex: number = 1;
//   selectedOptions: Array<string> = [];
//   activeOptions = document.getElementsByClassName('active');
//   quizScore: number = 0;
//   mode: string = 'quiz';

//   constructor(
//     private _http: Http,
//     private _quizService: QuizService) { }

//   // get the list of the questions and answers as an observable
//   getQAAList(): Observable<IQuiz[]> {
//     return this._http.get(this._quizQAUrl)
//       .map(response => <IQuiz[]>response.json().quizData)}

//   // selected options
//   selected(elem: any) {
//     elem.classList.toggle('active'); // toggles "active" CSS class on elements that the user clicks on
//     this.selectedOptions.length = 0;
//     // thi    s.mode = 'selected';
//     for (var i = 0; i < this.activeOptions.length; i++) {
//       this.selectedOptions.push(this.activeOptions[i].innerHTML);
//     }
//   }

//   // next question function
//   nextQuestion() {
  
//     if (this.questionIndex <= this._quiz.length) {
//       for (let i = this.questionIndex - 1; i < this.questionIndex; i++) {
        
//         let selectedAnswers = String(this.selectedOptions);
//         console.log(selectedAnswers);
//         let correctAnswer = String(this._quiz[i].answer);
//         console.log(correctAnswer);
//         if (selectedAnswers === correctAnswer) {
//           console.log('correct')
//           this.quizScore++;
//           console.log("efrfe" + this.quizScore)
//         }
//         if (this.questionIndex === this._quiz.length) {
//           this.calculateScore();
//         }
//       }
//       this.questionIndex++;
//       this.selectedOptions.length = 0;
//     }
//   }

//   calculateScore() {
//     this.quizScore = (this.quizScore / this._quiz.length)*100;
//     this._quizService.quizDone(true);
//     this._quizService.quizScore(this.quizScore);
//     console.log(this.quizScore)
//   }

//   ngOnInit(): void {
//     this.getQAAList()
//       .subscribe(
//       quiz => this._quiz = quiz, // set our local _quiz array equal to the IQuiz[] data which arrive from our data stream
//       error => this.errorMessage = <any>error);
//   }
// }
  