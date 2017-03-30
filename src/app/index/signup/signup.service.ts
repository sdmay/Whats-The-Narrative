import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignUpService {
    constructor(private http: Http) {}

    registerUser(userObject): Observable<any> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('api/userauth/registeruser', userObject, options)
            .map(this.extractRegisterUserData)
            .catch(this.handleError);
    }

    extractRegisterUserData(res: Response): void {
        const body = res.json();
        console.log(body);
        return body;
    }

     public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
