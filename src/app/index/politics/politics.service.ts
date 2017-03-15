import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Politics } from './politics-type';

@Injectable()
export class PoliticsService {
    private apiUrl = '/api/popularnewssearchs/politics';
    constructor(private http: Http) {}

    // TODO: construct politics type for this Observable
    public getPolitics(): Observable<any[]> {
        console.log(this.apiUrl);
        return this.http.get(this.apiUrl)
            .map(this.parsePoliticsSearchData)
            .catch(this.handleError);
    }

    private parsePoliticsSearchData(res: Response) {
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
