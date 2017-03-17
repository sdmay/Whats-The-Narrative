import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router, CanActivate } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {
    result: any;
    constructor(private http: Http,
        private router: Router) { }


    loginUser(userObject) {
        const apiUrl = `api/userauth/login/${userObject.name}/${userObject.pass}`;
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.get(apiUrl, options)
        .map(this.extractLoginUserData)
            .catch(this.handleError);

    }

    // TODO: put in return value type.
    extractLoginUserData(res: Response) {
        const body = res;
        console.log(body);
        

    }
       public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}


