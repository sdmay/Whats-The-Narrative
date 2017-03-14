import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchResultsService {
  stories: any[] = [];

  constructor(
    private http: Http
  ) {}

  // TODO: give this observable a type that is not any
  public getUsersSearchFromServer(userSearchData) {
    const apiUrl = `/api/mainnewssearch/${userSearchData}`;

    console.log(apiUrl);
    this.http.get(apiUrl)
      .map((response: any) => {
        console.log(JSON.parse(response._body));
        return JSON.parse(response._body);
      }).subscribe(result => {
          this.stories = result;
      });
      // .catch(this.handleError);
  }

  private extractUserSearchData(res: Response) {
    // console.log(res);
    const body = res.json();
    console.log('search results array');
    console.log(body);
    return body || {};
  }

  private handleError(res: Response) {
    // TODO: put in error handler
  }
}
