import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Trending } from './trending';

@Injectable()
export class TrendingService {
    private apiUrl = '/api/popularnewssearchs/trending';
    // TODO: turn this api call into a server side call.
    // private catUrl = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=20';
    // // http://thecatapi.com/api/images/get?format=xml&results_per_page=20
    // private trendingUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=097be422255e45a18b6864a8176f4a6c&q=trump';
    // private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    public getTrending(): Observable<any[]> {
        console.log(this.apiUrl);
        return this.http.get(this.apiUrl)
            .map(this.parseTrendingSearchData)
            .catch(this.handleError)
    }

    private parseTrendingSearchData(res: Response) {
        // console.log(res);
        const body = res.json();
        console.log('trending results array');
        console.log(body);
        return body || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}