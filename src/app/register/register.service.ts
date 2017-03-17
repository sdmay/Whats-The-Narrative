import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class RegisterService {
    constructor(private http: Http) {

    }

    // TODO: put in return value type and type for parameter
    registerUser(userObject) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('api/userauth/registeruser', userObject, options)
            .map(this.extractRegisterUserData)
            .catch(this.handleError);
    }

    // TODO: put in return value type.
    extractRegisterUserData(res: Response) {
        const body = res.json();
        console.log(body);
    }

     public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
