import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Money } from './money-type';

@Injectable()
export class MoneyService {
    private apiUrl = '/api/popularnewssearchs/money';
    constructor(private http: Http) {}

    // TODO: construct money type for this Observable
    public getMoneyStories(): Observable<any[]> {
        console.log(this.apiUrl);
        return this.http.get(this.apiUrl)
            .map(this.parseMoneySearchData)
            .catch(this.handleError);
    }

    private parseMoneySearchData(res: Response) {
        // console.log(res);
        const body = res.json();
        console.log('Politics results array');
        console.log(body);
        return body || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
