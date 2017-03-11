import { Router } from 'express';

import UserAuthenication from './user-authenication';
import NewsLetterSignUp from './newslettersignup';
import LwTwitterFeedComponent from './src/app/home/twitter/lw-twitter-feed.component'
import RightWingTwitterFeed from './twitter-api';

class Routers {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/userauth', UserAuthenication);
        this.router.post('/newsletter', NewsLetterSignUp );
        this.router.get('/twitterfeed', RightWingTwitterFeed)
        // TODO : put reference to sub routers here (external api calls etc).
    }
}


export default new Routers().router;