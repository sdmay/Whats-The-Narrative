import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchResultsService {
  constructor(
    private http: Http
  ) {}

  // TODO: give this observable a type that is not any
  public test(userSearchData): Observable<any[]> {
    const apiUrl = `/api/mainnewssearch/${userSearchData}`;
    return this.http.get(apiUrl)
      .map(this.extractUserSearchData);
      // .catch(this.handleError);
  }

  private extractUserSearchData(res: Response) {
    const body = res.json();
    console.log('search results array');
    console.log(body);
    return body || {};
  }

  private handleError(res: Response) {
    // TODO: put in error handler
  }
}