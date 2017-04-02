import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthenicationControl } from "../shared/authenication/authenication-control";
import { SavedArticleType } from '../shared/types/saved-article-type';


@Injectable()
export class MySavedArticlesService {
    private getMySavedArticlesApiUrl: string = '/api/getsavedarticles';
    
    constructor(
        private http: Http,
        private authenicationControl: AuthenicationControl
        ) 
    {}

    public getMySavedArticlesFromTheDatabase(): Observable<SavedArticleType[]> {
        // if the user is not logged in stop.
        if (!this.authenicationControl.isTheUserAuthenicated()) {
            return;
        }

        const options = this.authenicationControl.createAuthorizationHeader();
        return this.http.get(this.getMySavedArticlesApiUrl, options)
            .map(this.extractMySavedArticlesData)
            .catch(this.handleError);
    }

    public handleDeleteArticleFromDatabase(articleId: string): Observable<any> {
         // if the user is not logged in stop.
        if (!this.authenicationControl.isTheUserAuthenicated()) {
            return;
        }
        const options = this.authenicationControl.createAuthorizationHeader();
        const apiUrl = `/api/deletethissavedarticle/${articleId}`;
        return this.http.delete(apiUrl, options)
            .map(this.extractMySavedArticlesData)
            .catch(this.handleError);
    }

    private extractMySavedArticlesData(res: Response): SavedArticleType[] {
        const body = res.json();
        return body.data;
    }

    private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}