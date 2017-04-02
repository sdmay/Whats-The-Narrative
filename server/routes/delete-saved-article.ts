import { Router, Request, Response, NextFunction } from 'express';

import { JsonWebTokenMiddleWare } from "./middleware/json-web-token-middleware";

import { User } from "../models/User";
import { Article } from "../models/Article";

export class DeleteSavedArticleRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/:articleid', JsonWebTokenMiddleWare.getPublicKey);
        this.router.use('/:articleid', JsonWebTokenMiddleWare.verifiyJsonWebToken);
        this.router.use('/:articleid', this.removeArticleFromArticlesCollection);
        this.router.delete('/:articleid', this.removeArticleReferenceFromUserModel);
    }

    private removeArticleFromArticlesCollection(req: Request, res: Response, next: NextFunction): void {
        Article.findOneAndRemove({ "_id": req.params.articleid, "idOfUserWhoSaved": res.locals.decodedToken.id}, (error) => {
            if (error) return next(error);
            next();
        });

    }

    // should probably put this in a PUT method but whatever
    private removeArticleReferenceFromUserModel(req: Request, res: Response, next: NextFunction): void {
        User.update({"_id": res.locals.decodedToken.id}, { $pull: {"savedArticles": { $in: [req.params.articleid] } } })
        .exec((error, doc) => {
            if (error) return next(error);
            // send the id of the deleted article back up so we can remove it from the user interface
            res.json({status: 200, data: req.params.articleid});
        });
    }





}

export default new DeleteSavedArticleRouter().router;
