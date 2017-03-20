import { Router, Request, Response, NextFunction } from 'express';

import TwitterApiConstructor from './external-api-keys/twitter';

export class TwitterApi {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('/rightwing', this.createRightWingTwitterSearch, this.makeTwitterSearch, this.sendBackTweetResults);
        this.router.get('/leftwing', this.createLeftWingMakeTwitterSearch, this.makeTwitterSearch, this.sendBackTweetResults);
    }

    private createRightWingTwitterSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.twitterClient = TwitterApiConstructor.twitterApiInstance;
        res.locals.twitterEndPoint = TwitterApiConstructor.twitterSearchTweetsEndPoint;
        res.locals.twitterSearchParameters = TwitterApiConstructor.twitterRightWingSearchParameters;
        next();
    }

    private createLeftWingMakeTwitterSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.twitterClient = TwitterApiConstructor.twitterApiInstance;
        res.locals.twitterEndPoint = TwitterApiConstructor.twitterSearchTweetsEndPoint;
        res.locals.twitterSearchParameters = TwitterApiConstructor.twitterLeftWingSearchParameters;
        next();
    }

    private makeTwitterSearch(req: Request, res: Response, next: NextFunction): void {
        res.locals.twitterClient.get(res.locals.twitterEndPoint, res.locals.twitterSearchParameters,
            (error, tweets, response) => {
                res.locals.tweets = tweets;
                next();
            });
    }

    private sendBackTweetResults(req: Request, res: Response): void {
        res.json(res.locals.tweets);
    }

}

export default new TwitterApi().router;
