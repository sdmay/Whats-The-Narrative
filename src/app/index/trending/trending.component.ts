import { Component, OnInit } from '@angular/core';

import { Story } from '../../shared/types/story-type';
import { StoriesService } from '../../shared/observables/stories.service';
import { AuthenicationControl } from "../../shared/authenication/authenication-control";
import { SaveArticleService } from "../../shared/observables/save-article-service";

@Component({
    moduleId: module.id,
    templateUrl: '../index-shared/stories.template.html'
})

export class TrendingComponent implements OnInit {
    private apiUrl: string = '/api/mainnewssearch/trending';
    private stories: Story[];

    constructor(
        private storiesService: StoriesService,
        private authenicationControl: AuthenicationControl,
        private saveArticleService: SaveArticleService
    ) { }

    ngOnInit(): void {
        this.toggleGetTrending();
    }

    private toggleGetTrending(): void {
        this.storiesService.getStories(this.apiUrl).subscribe(
            stories => this.stories = stories
        );
    }

    private saveArticle(attributes): void {
        this.saveArticleService.saveArticle(attributes).subscribe(
            response => this.determineSuccessOfSavingArticle(response)
        );
    }

    private determineSuccessOfSavingArticle(response): void {
        // TODO: let the user know the article was successfully saved or not.
        console.log(response);
    }
}
