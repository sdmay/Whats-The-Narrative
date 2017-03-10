import { Router, Request, Response, NextFunction } from 'express';


import NewsLetterModel from '../models/newslesttersignupmodel';

export class NewsLetterSignUp {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.post('/newsletter/new', this.checkDataBase, this.newsLetterSignUp);
        // TODO: login user route
    }
    private checkDataBase(req: Request, res: Response, next: NextFunction) {
        NewsLetterModel.findOne({'email': req.body.email},
        (error, user) => {
            // TODO: some kind of error handling for the future.
            if (error) {
                throw error;
            }

            if (user) {
                // tell the client the user already exists.
                res.json({status: 422, data: 'Email already in database'});
            }

            if (!user) {
                next();
            }
        });
    }

    private newsLetterSignUp(req: Request, res: Response, next: NextFunction) {
        res.locals.newEmail = new NewsLetterModel({
            name: req.body.name,
            email: req.body.email
             });
             res.locals.newEmail.save((error) => {
           // TODO: some kind of error handling for the future.
           if (error) {
            throw error;
           }

           res.json({status: 200, data: ''});
        });
    }
}

export default new NewsLetterSignUp().router;
