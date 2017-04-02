import { Component, OnInit } from '@angular/core';


import { SavedArticleType } from '../shared/types/saved-article-type';
import { AuthenicationControl } from "../shared/authenication/authenication-control";
import { MySavedArticlesService } from './saved.service';



@Component({
    moduleId: module.id,
    selector: 'saved',
    styleUrls: ['saved.component.css'],
    templateUrl: './saved.component.html'
})

export class SavedComponent implements OnInit {
    private mySavedArticles: SavedArticleType[];

    constructor(
        private mySavedArticlesService: MySavedArticlesService,
        private authenicationControl: AuthenicationControl
    ) { }

    ngOnInit(): void {
        this.mySavedArticlesService.getMySavedArticlesFromTheDatabase().subscribe(
            mySavedArticles => this.mySavedArticles = mySavedArticles
        );
        setTimeout(() => {
            console.log(this.mySavedArticles);
        }, 2500);
    }

    private toggleDeleteArticle(event): void {
        const articleId = event.id.nodeValue;
        // set a timeout on this function call so the quick animation can close.
        setTimeout(() => {
            this.removeArticleFromComponentStorage(articleId);
        }, 2000);
        this.toggleDeleteArticleFromDatabaseService(articleId);
    }

    private removeArticleFromComponentStorage(articleId: string): void {
        for (let i = 0; i < this.mySavedArticles.length; i++) {
            if (this.mySavedArticles[i]._id === articleId) {
                this.mySavedArticles.splice(i, 1);
                break;
            };
        }
    }

    private toggleDeleteArticleFromDatabaseService(articleId: string): any {
        this.mySavedArticlesService.handleDeleteArticleFromDatabase(articleId).subscribe(
            response => this.removeSavedArticleFromInterface(response)
        );
    }

    private removeSavedArticleFromInterface(response: string): void {
        console.log(response);
    }

}
