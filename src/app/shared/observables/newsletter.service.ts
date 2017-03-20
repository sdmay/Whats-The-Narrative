import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NewsLetterService {
    constructor(private http: Http) {}

    registerUser(userObject): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('api/newsletter/signup', userObject, options)
            .map(this.extractRegisterUserData)
            .catch(this.handleError);
    }

    extractRegisterUserData(res: Response): void {
        const body = res.json();
        console.log(body);
    }

     private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
