import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http: Http) {}


    loginUser(userObject) {
        const apiUrl = `api/userauth/login/${userObject.name}/${userObject.password}`;
        console.log(apiUrl);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        return this.http.get(apiUrl, options)
            .map(this.extractLoginUserData);
    }

    // TODO: put in return value type.
    extractLoginUserData(res: Response) {
        const body = res.json();
        console.log(body);
    }
}