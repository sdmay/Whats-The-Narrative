import { Router, Request, Response, NextFunction } from 'express';


import { NewsLetter } from '../models/newslesttersignupmodel';

export class NewsLetterSignUpRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }
    private initializeRoutes() {
        this.router.use('/signup', this.isThisUserSignedUpForTheNewsLetter);
        this.router.use('/signup', this.createNewsLetterUser);
        this.router.post('/signup', this.saveUserToNewsLetterCollection);
    }

    private isThisUserSignedUpForTheNewsLetter(req: Request, res: Response, next: NextFunction): void {
        NewsLetter.findOne({ 'email': req.body.signupemail },
            (error, user) => {
                // TODO: some kind of error handling for the future.
                if (error) {
                    return next(error);
                }

                if (user) {
                    // tell the client the user already exists.
                    res.json({ status: 422, data: 'Email already in database' });
                }

                if (!user) {
                    next();
                }
            });
    }

    private createNewsLetterUser(req: Request, res: Response, next: NextFunction): void {
        res.locals.newEmail = new NewsLetter({
            name: req.body.signupname,
            email: req.body.signupemail
        });
        next();
    }

    private saveUserToNewsLetterCollection(req: Request, res: Response, next: NextFunction): void {
        res.locals.newEmail.save((error) => {
            // TODO: some kind of error handling for the future.
            if (error) {
                return next(error);
            }

            res.json({ status: 200, data: '' });
        });
    }

}

export default new NewsLetterSignUpRouter().router;
