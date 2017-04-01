import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SavedArticleType } from "../../shared/types/saved-article-type";
import { AuthenicationControl } from "../../shared/authenication/authenication-control";

@Injectable()
export class SaveArticleService {
    private apiUrl = "/api/savearticle"


    constructor(
        private http: Http,
        private authenicationControl: AuthenicationControl
    ) { }

    private createSaveArticleObject(attributes): SavedArticleType {
        const newSavedArticleObject = {
            pictureUrl: attributes.picture.value,
            articleId: attributes.id.value,
            author: attributes.author.value,
            summaryPartOne: attributes.summarypartone.value,
            summaryPartTwo: attributes.summaryparttwo.value,
            articleUrl: attributes.link.value,
            title: attributes.title.value
        };
        return newSavedArticleObject;
    }

    public saveArticle(newSavedArticleObject: SavedArticleType): Observable<any> {
        const article = this.createSaveArticleObject(newSavedArticleObject);
        const options = this.authenicationControl.createAuthorizationHeader();
        return this.http.post(this.apiUrl, article, options)
            .map(this.extractRegisterUserData)
            .catch(this.handleError);
    }

    private extractRegisterUserData(res: Response): any {
        const body = res.json();
        return body;
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
