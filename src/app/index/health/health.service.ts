import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Health } from './health-type';

@Injectable()
export class HealthService {
    private apiUrl = '/api/popularnewssearchs/health';
    constructor(private http: Http) {}

    // TODO: construct money type for this Observable
    public getHealthStories(): Observable<any[]> {
        console.log(this.apiUrl);
        return this.http.get(this.apiUrl)
            .map(this.parseHealthSearchData)
            .catch(this.handleError);
    }

    private parseHealthSearchData(res: Response) {
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
