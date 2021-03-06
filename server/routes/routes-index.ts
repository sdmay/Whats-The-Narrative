import { Router } from 'express';

import UserAuthenicationRouter from './user-authenication';
import NewsLetterSignUpRouter from './newslettersignup';
import TwitterApiRouter from './twitter-search';
import MainNewsSearchRouter from './main-news-search';
import SaveArticleRouter from './save-article';
import GetSavedArticlesRouter from './get-saved-articles';
import DeleteSavedArticleRouter from './delete-saved-article';

class Routers {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/getsavedarticles', GetSavedArticlesRouter);
        this.router.use('/userauth', UserAuthenicationRouter);
        this.router.use('/twitterfeed', TwitterApiRouter);
        this.router.use('/newsletter', NewsLetterSignUpRouter);
        this.router.use('/mainnewssearch', MainNewsSearchRouter);
        this.router.use('/savearticle', SaveArticleRouter);
        this.router.use('/deletethissavedarticle', DeleteSavedArticleRouter);
    }
}


export default new Routers().router;