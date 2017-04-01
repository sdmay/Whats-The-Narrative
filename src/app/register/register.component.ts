import { Register } from 'ts-node/dist';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// TODO: do we need this anymore?
// import { Survey } from 'survey-angular';
import 'rxjs/Rx';

import { RegisterService } from './register.service';
import { QuizService } from './quiz/quiz.service';
import { HelperService } from './quiz/helper.service';
import { Option, Question, Quiz, QuizConfig } from './quiz/models/index';

@Component({
  moduleId: module.id,
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
  providers: [QuizService]
})

export class RegisterComponent  implements OnInit {
  quizes: any[];

  quiz: Quiz = new Quiz(null);

  mode: string = 'quiz';

  quizName: string;

  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': true,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };

  constructor(private quizService: QuizService) { }

   ngOnInit() {
    this.quizes = this.quizService.getAll();
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);
  }

loadQuiz(quizName: string) {
    this.quizService.get(quizName).subscribe(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
    });
    this.mode = 'quiz';
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }


  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }
  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }



  isAnswered(index) {
    return this.quiz.questions[index].options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'QuizId': this.quiz.id, 'QuestionId': x.id, 'Answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.mode = 'result';
  }
}
     //   ngOnInit() {

  //  {
  //       console.log("Reading _ConfigurationService ");
  //       //console.log(_ConfigurationService.getConfiguration());
    
  //        this.quizService.getConfiguration()
  //           .subscribe(
  //           (res) => {
  //               this.configs = res;
  //               console.log("after reading");
  //               console.log(this.configs);
                
  //           },
  //           (error) => console.log("error : " + error),
  //           () => console.log('Error in GetApplication in Login : ' + Error)
  //       );
    
  //   }
         
  //       });
    
  //   this.quizes = this.quizService.getAll();
  //   // this.quizName = this.quizes[0].id;
  //   this.loadQuiz();
  // }