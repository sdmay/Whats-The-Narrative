import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Story } from '../index-shared/story-type';

@Injectable()
export class PoliticsService {
    private apiUrl = '/api/popularnewssearchs/politics';
    constructor(private http: Http) { }

    public getPolitics(): Observable<Story[]> {
        return this.http.get(this.apiUrl)
            .map(this.parsePoliticsSearchData)
            .catch(this.handleError);
    }

    private parsePoliticsSearchData(res: Response): Story[] {
        const body = res.json();
        console.log('Politics results array');
        console.log(body);
        return body;
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
