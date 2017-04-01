import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AuthenicationControl } from '../shared/authenication/authenication-control';

import { Story } from '../shared/types/story-type';


@Injectable()
export class SearchResultsService {
  private stories: Story[];

  constructor(
    private http: Http,
    private authenicationControl: AuthenicationControl
  ) { }



  public createLoggedInOrNotLoggedInSearch(userSearchData: string) {
    // little long winded sorry.
    (this.authenicationControl.isTheUserAuthenicated()) ? this.getUsersLoggedInSearch(userSearchData) : this.getUsersNotLogggedInSearch(userSearchData);
  }

  private getUsersNotLogggedInSearch(userSearchData: string) {
    const apiUrl = `/api/mainnewssearch/${userSearchData}`;
    this.http.get(apiUrl)
      .map(this.extractUserSearchData)
      .subscribe(result => {
        this.stories = result;
      });
  }

  private getUsersLoggedInSearch(userSearchData: string) {
    const apiUrl = `/api/mainnewssearch/loggedin/${userSearchData}`;
    const options = this.authenicationControl.createAuthorizationHeader();
    this.http.get(apiUrl, options)
      .map(this.extractUserSearchData)
      .subscribe(result => {
        this.stories = result;
      });
  }

  private extractUserSearchData(res: Response) {
    const body = res.json();
    console.log('search results array');
    console.log(body);
    return body;
  }
}
