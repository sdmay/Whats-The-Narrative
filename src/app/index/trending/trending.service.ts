import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Trending } from './trending';

@Injectable()
export class TrendingService {
    // TODO: turn this api call into a server side call.
    private catUrl = 'http://thecatapi.com/api/images/get?format=xml&results_per_page=20';
    // http://thecatapi.com/api/images/get?format=xml&results_per_page=20
    private trendingUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=097be422255e45a18b6864a8176f4a6c&q=trump';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getTrending(): any {
        console.log(this.trendingUrl);
        return this.http.get(this.trendingUrl)
            .map((response: any) => {
                return JSON.parse(response._body);
            }).toPromise();
            // .then(response => {
            //     console.log(response);
            //     return response.json().data as Trending[];
            // })
            // .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
