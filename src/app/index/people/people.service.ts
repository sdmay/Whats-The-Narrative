import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Story } from '../index-shared/story-type';

@Injectable()
export class PeopleService {
    private apiUrl = '/api/popularnewssearchs/people';
    constructor(private http: Http) {}

    public getPeopleStories(): Observable<Story[]> {
        return this.http.get(this.apiUrl)
            .map(this.parsePeopleSearchData)
            .catch(this.handleError);
    }

    private parsePeopleSearchData(res: Response): Story[] {
        const body = res.json();
        console.log('people results array');
        console.log(body);
        return body;
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}