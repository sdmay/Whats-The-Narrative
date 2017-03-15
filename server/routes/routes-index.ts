import { Router } from 'express';

import UserAuthenication from './user-authenication';
import NewsLetterSignUp from './newslettersignup';
import TwitterApi from './twitter-api';
import MainNewsSearch from './main-news-search';
import PopularSearches from './popular-news-searches';


class Routers {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/userauth', UserAuthenication);
        this.router.use('/twitterfeed', TwitterApi);
        this.router.use('/mainnewssearch', MainNewsSearch);
        this.router.post('/newsletter', NewsLetterSignUp);
        this.router.use('/popularnewssearchs', PopularSearches);
        // TODO : put reference to sub routers here (external api calls etc).
    }
}


export default new Routers().router;