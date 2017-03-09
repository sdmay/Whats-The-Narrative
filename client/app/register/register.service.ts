import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class RegisterService {
    constructor(private http: Http) {

    }                                                                                                                 

    registerUser(userObject: object) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post("api/userauth/registeruser", userObject, options)
            .map(this.extractRegisterUserData)
            // TODO: Put in catch for error handling.
    }     

    extractRegisterUserData(res: Response) {
        let body = res.json();
        console.log(body);
    }                                                                                                                     
}