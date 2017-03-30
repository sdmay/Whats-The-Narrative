import { Router, Request, Response, NextFunction } from 'express';

import { JsonWebTokenMiddleWare } from "./middleware/json-web-token-middleware";

import { Article } from "../models/Article";
import { User } from "../models/User";

export class SaveArticleRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/', JsonWebTokenMiddleWare.getPublicKey);
        this.router.use('/', JsonWebTokenMiddleWare.verifiyJsonWebToken);
        this.router.post('/', this.createdNewSavedArticle, this.updateUsersSavedArticles);

    }

    private createdNewSavedArticle(req: Request, res: Response, next: NextFunction): void {
        let newArticle = new Article({
            pictureUrl: req.body.pictureUrl,
            articleId: req.body.articleId,
            author: req.body.author,
            summaryPartOne: req.body.summaryPartOne,
            summaryPartTwo: req.body.summaryPartTwo,
            articleTitle: req.body.articleTitle,
        });
        next();
    }

    private updateUsersSavedArticles(req: Request, res: Response): void {
        User.findOne({"_id": res.locals.userInformation.id})
    }



}

export default new SaveArticleRouter().router;
