import { Router, Request, Response, NextFunction } from 'express';

import { JsonWebTokenMiddleWare } from "./middleware/json-web-token-middleware";

import { User } from "../models/User";

export class GetSavedArticlesRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/', JsonWebTokenMiddleWare.getPublicKey);
        this.router.use('/', JsonWebTokenMiddleWare.verifiyJsonWebToken);
        this.router.get('/', this.getUsersSavedArticles);
    }

    private getUsersSavedArticles(req: Request, res: Response, next: NextFunction): void {
        User.findOne({ "_id": res.locals.decodedToken.id })
            .populate("savedArticles")
            .exec((error, doc) => {
                if (error) return next(error);
                res.json({ status: 200, data: doc.savedArticles });
            });
    }





}

export default new GetSavedArticlesRouter().router;
