import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Router, CanActivate} from '@angular/router';


@Injectable()
export class LoginService {
    constructor(private http: Http,
    private router: Router) {}


    loginUser(userObject) {
        const apiUrl = `api/userauth/login/${userObject.name}/${userObject.pass}`;
        console.log(apiUrl);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers });
        console.log(options);
        return this.http.get(apiUrl, options)
            .map(res => res.json());
    }

    // TODO: put in return value type.
    // extractLoginUserData(res: Response) {
    //     const body = res;
    //     console.log(body);

    // }
}

// this.router.navigate(['/dashboard']);
