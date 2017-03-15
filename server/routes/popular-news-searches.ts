import { Router, Request, Response, NextFunction } from 'express';

import AylienNewsApi = require('aylien-news-api');


export class PopularNewsSearches {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/trending', this.createAylienNewsInstance, this.createTrendingNowNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/politics', this.createAylienNewsInstance, this.createPoliticsNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/people', this.createAylienNewsInstance, this.createPeopleNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/money', this.createAylienNewsInstance, this.createMoneyNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/health', this.createAylienNewsInstance, this.createHealthNewsSearch, this.searchNews, this.sendResultsBack);
    }

    private createAylienNewsInstance(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = new AylienNewsApi.DefaultApi();
        res.locals.AylienNewsInstance.apiClient.authentications['app_id'].apiKey = '2f2ac0fa';
        res.locals.AylienNewsInstance.apiClient.authentications['app_key'].apiKey = 'eebf8dce086aeb01006fcbd87323a13a';
        next();
    }

    private createTrendingNowNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.searchOptions = {
            'text': 'trending',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
        next();
    }

    private createPoliticsNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.searchOptions = {
            'text': 'politics',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
        next();
    }

    // TODO: adjust source Domains for this search
    private createPeopleNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.searchOptions = {
            'text': 'society',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
        next();
    }

    // TODO: adjust source Domains for this search
    private createMoneyNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.searchOptions = {
            'text': 'money',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
        next();
    }

    // TODO: adjust source Domains for this search.
    private createHealthNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.searchOptions = {
            'text': 'health',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'huffingtonpost.co.uk', 'salon.com', 'dailykos.com']
        };
        next();
    }

    private searchNews(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance.listStories(res.locals.searchOptions, (error, data, response) => {
            if (error) {
                // TODO: send the user an error
                console.log(error);
            } else {
                res.locals.stories = data.stories;
                next();
            }
        });
    }

    private sendResultsBack(req: Request, res: Response): void {
        res.json(res.locals.stories);
    }
}





export default new PopularNewsSearches().router;
