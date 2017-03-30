import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SavedArticleType } from "../../shared/types/saved-article-type";
import { AuthenicationControl } from "../../shared/authenication/authenication-control";

@Injectable()
export class SaveArticleService {
    private apiUrl = "/api/savearticle"

    
    constructor(
        private http: Http,
        private authenicationControl: AuthenicationControl
        ) {}

    saveArticle(newSavedArticleObject: SavedArticleType): Observable<any> {
        const options = this.authenicationControl.createAuthorizationHeader();
        return this.http.post('/api/savearticle', newSavedArticleObject, options)
            .map(this.extractRegisterUserData)
            .catch(this.handleError);
    }

    extractRegisterUserData(res: Response): any{
        const body = res.json();
        return body;
    }

     private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}
