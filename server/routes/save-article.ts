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
        this.router.use('/', this.createdNewSavedArticle);
        this.router.use('/', this.saveArticleToDatabase);
        this.router.post('/', this.updateUsersSavedArticles);
    }

    private createdNewSavedArticle(req: Request, res: Response, next: NextFunction): void {
        res.locals.article = new Article({
            pictureUrl: req.body.pictureUrl,
            articleId: req.body.articleId,
            author: req.body.author,
            summaryPartOne: req.body.summaryPartOne,
            summaryPartTwo: req.body.summaryPartTwo,
            articleUrl: req.body.articleUrl,
            articleTitle: req.body.title,
        });
        next();
    }

    private saveArticleToDatabase(req: Request, res: Response, next: NextFunction): void {
        res.locals.article.save((error, article) => {
            if (error) {
                return next(error);
            } else {
                res.locals.newArticle = article;
                next();
            }
        });
    }

    private updateUsersSavedArticles(req: Request, res: Response, next: NextFunction): void {
        User.findOneAndUpdate({ "_id": res.locals.usersInformation.id }, { $push: { "savedArticles": res.locals.article } }, { new: true })
            .exec((error, user) => {
                if (error) {
                    return next(error);
                } else {
                    res.json({ status: 200, data: "Article Was Successfully Saved" });
                }
            });
    }



}

export default new SaveArticleRouter().router;
