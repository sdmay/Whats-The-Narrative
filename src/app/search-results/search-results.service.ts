import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SearchResultsService {
  stories: any[] = [];

  constructor(
    private http: Http
  ) {}

  // TODO: give this observable a type that is not any
  public getUsersSearchFromServer(userSearchData) {
    const apiUrl = `/api/mainnewssearch/${userSearchData}`;
    this.http.get(apiUrl)
      .map(this.extractUserSearchData)
      .subscribe(result => {
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
