import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Trending } from './trending';

@Injectable()
export class TrendingService {
    private trendingUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=097be422255e45a18b6864a8176f4a6c&q=trump';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) { }

    getTrending(): Promise<Trending[]> {
        console.log(this.trendingUrl);
        return this.http.get(this.trendingUrl)
            .toPromise()
            .then(response => response.json().data as Trending[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
