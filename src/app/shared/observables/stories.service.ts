import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Story } from '../types/story-type';

@Injectable()
export class PoliticsService {
    constructor(private http: Http) { }

    public getPolitics(apiUrl): Observable<Story[]> {
        return this.http.get(apiUrl)
            .map(this.parseStoriesSearchData)
            .catch(this.handleError);
    }

    private parseStoriesSearchData(res: Response): Story[] {
        const body = res.json();
        console.log(body);
        return body;
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
