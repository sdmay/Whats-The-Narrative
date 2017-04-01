import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';



@Injectable()
export class QuizService {

      constructor(private http: Http) { }
  isQuizDone: boolean = false;
  score: number = null;
  quizDone(data: boolean) {
    this.isQuizDone = data;
  }
  quizScore(data: number) {
    this.score = data;
  }

}

//   constructor(private http: Http) {
//       let obj;
//       this.getJSON().subscribe(data => obj=data, error => console.log(error));
//    }

//   get(url: string) {
//     // return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
      
         
// }
    // result: Object;
    // constructor(http: Http) {
    //     this.result = {friends:[]};
    //     return http.get('./data/question.json')
    //     .map(data => data.json())
    //     .subscribe(data => this.result = data);
    // }
    
    //  constructor(private http: Http) {}

    //  search() {
    //        return this.http.get('/data/question.json').map((res:Response) => res.json());
    // }
    //  getConfiguration = (): Observable<Response> => {
    //     console.log("In getConfiguration of ConfigurationService");
    //     return this.http.get('data/question.json').map(res => res.json());
    // }

//   getData(){
//     return this.http.get(`./data/question.json`)
//                     .map(res => res.json().data);
//   }
// public getJSON(): Observable<any> {
//          return this.http.get("/data/question.json")
//                          .map((res:any) => res.json())
//                          .catch((error:any) => console.log(error));

//      }
//   getAll() {
//     return [
//       { id: 'data/question.json', name: 'Quiz' }
//     ];
//   }
// constructor(private http: Http) { }

//   get(url: string) {
//     return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
//   }

//   getAll() {
//     return [
//       { id: 'data/aspnet.json', name: 'Asp.Net' },
//       { id: 'data/csharp.json', name: 'C Sharp' },
//       { id: 'data/designPatterns.json', name: 'Design Patterns' }
//     ];
//   }

// }