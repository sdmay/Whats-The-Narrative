import { Router, Request, Response, NextFunction } from 'express';

import AylienNewsApiConstructor from './external-api-keys/aylien-news';
import { JsonWebTokenMiddleWare } from './middleware/json-web-token-middleware';


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
        this.router.get('/:searchterm', this.createHalfAndHalfLeftAndRightSearch, this.searchNews, this.sendResultsBack);

        this.router.use('/loggedin/:searchterm', JsonWebTokenMiddleWare.getPublicKey);
        this.router.use('/loggedin/:searchterm', JsonWebTokenMiddleWare.verifiyJsonWebToken);
        this.router.use('/loggedin/:searchterm', this.createLeftWingOrRightWingSearch);
        this.router.use('/loggedin/:searchterm', this.searchNews);
        this.router.get('/loggedin/:searchterm', this.sendResultsBack);
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

    private createHalfAndHalfLeftAndRightSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;
        res.locals.searchOptions = AylienNewsApiConstructor.halfAndHalfLeftAndRightWingSearchOptions;
        res.locals.searchOptions.text = req.params.searchterm;
        next();
    }

    private createLeftWingOrRightWingSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance = AylienNewsApiConstructor.aylienNewsApiInstance;

        // Determine if the user is left or right wing based upon the information we gathered from their stored token
        // give them the opposite of what they normally would look for.
        if (res.locals.decodedToken.leftOrRight === "Right") {
            res.locals.searchOptions = AylienNewsApiConstructor.leftWingNewsSearchOptions;
        } else {
            res.locals.searchOptions = AylienNewsApiConstructor.rightWingNewsSearchOptions;
        }

        res.locals.searchOptions.text = req.params.searchterm;
        next();
    }

    private searchNews(req: Request, res: Response, next: NextFunction): void {
        res.locals.AylienNewsInstance.listStories(res.locals.searchOptions, (error, data, response) => {
            if (error) {
                return next(error);
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
