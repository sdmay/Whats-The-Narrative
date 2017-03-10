import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { Comment }           from '../model/comment';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export default class RightWingService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private articlesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=097be422255e45a18b6864a8176f4a6c&q=Harambe'; 

     getComments() : Observable<Comment[]> {

         // ...using get request
         return this.http.get(this.articlesUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}

