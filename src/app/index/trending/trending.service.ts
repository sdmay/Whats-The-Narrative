import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Story } from '../index-shared/story-type';

@Injectable()
export class TrendingService {
    private apiUrl = '/api/popularnewssearchs/trending';
    constructor(private http: Http) { }

    public getTrending(): Observable<Story[]> {
        console.log(this.apiUrl);
        return this.http.get(this.apiUrl)
            .map(this.parseTrendingSearchData)
            .catch(this.handleError);
    }

    private parseTrendingSearchData(res: Response): Story[] {
        const body = res.json();
        console.log('trending results array');
        console.log(body);
        return body;
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
