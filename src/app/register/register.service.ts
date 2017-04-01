import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  isQuizDone: boolean = false;
  score: number = null;
  constructor() { }

  quizDone(data: boolean) {
    this.isQuizDone = data;
  }
  quizScore(data: number) {
    this.score = data;
  }

}

// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';

// @Injectable()
// export class RegisterService {
//     constructor(private http: Http) {}

//     registerUser(userObject): Observable<any> {
//         const headers = new Headers({ 'Content-Type': 'application/json' });
//         const options = new RequestOptions({ headers: headers });
//         return this.http.post('api/userauth/registeruser', userObject, options)
//             .map(this.extractRegisterUserData)
//             .catch(this.handleError);
//     }

//     extractRegisterUserData(res: Response): void {
//         const body = res.json();
//         console.log(body);
//     }

//      public handleError(error: Response) {
//     console.error(error);
//     return Observable.throw(error.json().error || 'Server error');
//   }

// }
