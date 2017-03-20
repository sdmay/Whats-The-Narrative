import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Story } from '../../shared/types/story-type';


@Injectable()
export class SearchResultsService {
  stories: Story[];

  constructor(private http: Http) {}


  public getUsersSearchFromServer(userSearchData: string): void {
    const apiUrl = `/api/mainnewssearch/${userSearchData}`;
    this.http.get(apiUrl)
      .map(this.extractUserSearchData)
      .catch(this.handleError)
      .subscribe(result => {
          this.stories = result;
      });
  }

  private extractUserSearchData(res: Response): Story[] {
    const body = res.json();
    console.log('search results array');
    console.log(body);
    return body;
  }

  private handleError(res: Response) {
    // TODO: put in error handler
  }
}
