import { Component, OnInit } from '@angular/core';

import { Story } from '../../shared/types/story-type';
import { StoriesService } from '../../shared/observables/stories.service';
import { AuthenicationControl } from "../../shared/authenication/authenication-control";
import { SaveArticleService } from "../../shared/observables/save-article-service";
import { SavedArticleType } from "../../shared/types/saved-article-type";

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

    private createSaveArticleObject(attributes): SavedArticleType {
        let newSavedArticleObject = {
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

    private saveArticle(attributes): any {
        let newSavedArticleObject = this.createSaveArticleObject(attributes);
        this.saveArticleService.saveArticle(newSavedArticleObject).subscribe();
    }
}
