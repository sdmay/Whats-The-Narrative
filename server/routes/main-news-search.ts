import { Router, Request, Response, NextFunction } from 'express';

import AylienNewsApiConstructor from './external-api-keys/aylien-news';


export class PopularNewsSearches {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/trending', this.createTrendingNowNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/politics', this.createPoliticsNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/people', this.createPeopleNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/money', this.createMoneyNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/health', this.createHealthNewsSearch, this.searchNews, this.sendResultsBack);
        this.router.get('/:searchterm', this.createLeftWingOrRightWingSearch, this.searchNews, this.sendResultsBack);

    }

    private createTrendingNowNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;
        res.locals.searchOptions = AylienNewsApiConstructor.trendingNowNewsSearchOptions;
        next();
    }

    private createPoliticsNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;
        res.locals.searchOptions = AylienNewsApiConstructor.politicsNewsSearchOptions;
        next();
    }

    private createPeopleNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;
        res.locals.searchOptions = AylienNewsApiConstructor.peoplesNewsSearchOptions;
        next();
    }

    private createMoneyNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;
        res.locals.searchOptions = AylienNewsApiConstructor.moneyNewsSearchOptions;
        next();
    }

    private createHealthNewsSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;
        res.locals.searchOptions = AylienNewsApiConstructor.healthNewsSearchOptions;
        next();
    }

    private createLeftWingOrRightWingSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;

        //TODO: here is where we determine if the user is going to receive left or right wing searches. this needs to be implemented properly.
        // the if statement can obviously be changed that is just placeholder for the time being.

        // if (userObjectSurveryResults === "left wing") {
        //     res.locals.searchOptions = AylienNewsApiConstructor.leftWingNewsSearchOptions;
        // } else {
        //     res.locals.searchOptions = AylienNewsApiConstructor.rightWingNewsSearchOptions;
        // }

        res.locals.searchOptions = AylienNewsApiConstructor.leftWingNewsSearchOptions;
        // replace the empty string from the constructor for the users search term recieved from the client request
        res.locals.searchOptions.text = req.params.searchterm;
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
