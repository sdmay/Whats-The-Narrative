import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Story } from '../shared/types/story-type';


@Injectable()
export class SearchResultsService {
  stories: Story[];

  constructor(private http: Http) {}


  public getUsersSearchFromServer(userSearchData: string) {
    const apiUrl = `/api/mainnewssearch/${userSearchData}`;
    this.http.get(apiUrl)
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
