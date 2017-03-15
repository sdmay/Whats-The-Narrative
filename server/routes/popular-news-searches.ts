import { Router, Request, Response, NextFunction } from 'express';

import AylienNewsApi = require('aylien-news-api');


export class PopularNewsSearches {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/trending',
        this.createAylienNewsInstance, this.createTrendingNowNewsSearch, this.searchNews, this.sendResultsBack);
    }

    private createAylienNewsInstance(req: Request, res: Response, next: NextFunction): void {
        console.log('test');
        res.locals.AylienNewsInstance = new AylienNewsApi.DefaultApi();
        res.locals.AylienNewsInstance.apiClient.authentications['app_id'].apiKey = '2f2ac0fa';
        res.locals.AylienNewsInstance.apiClient.authentications['app_key'].apiKey = 'eebf8dce086aeb01006fcbd87323a13a';
        next();
    }

    private createTrendingNowNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.searchOptions = {
            'title': 'trending test',
            'language': ['en'],
            'notLanguage': ['es', 'it'],
            'publishedAtStart': 'NOW-3DAYS',
            'publishedAtEnd': 'NOW',
            'sourceDomain': ['breitbart.com', 'theblaze.com', 'drudgereport.com', 'dailycaller.com', 'nationalreview.com', 'townhall.com']
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
