import { Router } from 'express';

import UserAuthenicationRouter from './user-authenication';
import NewsLetterSignUpRouter from './newslettersignup';
import TwitterApiRouter from './twitter-search';
import MainNewsSearchRouter from './main-news-search';


class Routers {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/userauth', UserAuthenicationRouter);
        this.router.use('/twitterfeed', TwitterApiRouter);
        this.router.post('/newsletter', NewsLetterSignUpRouter);
        this.router.use('/mainnewssearch', MainNewsSearchRouter);
    }
}


export default new Routers().router;