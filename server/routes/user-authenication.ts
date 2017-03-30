import bcrypt = require("bcrypt");
import { Router, Request, Response, NextFunction } from 'express';
import { JsonWebTokenMiddleWare } from "./middleware/json-web-token-middleware";

import { User } from '../models/User';

export class UserAuthenication {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/registeruser', this.doesTheUserExistInTheDatabase, this.createNewUserFromModel, this.saveNewUserToDatabase);
        this.router.get('/login/:name/:password', this.userIsTrue, this.doesTheUsersPasswordMatch, JsonWebTokenMiddleWare.getPrivateKey, JsonWebTokenMiddleWare.signJsonWebToken);
    }

    public userIsTrue(req: Request, res: Response, next: NextFunction): void {
        User.findOne({ 'name': req.params.name },
            (error, user) => {
                // TODO: some kind of error handling for the future.
                if (error) throw error;

                if (user) {
                    // store the user information found in the database to a local variable.
                    res.locals.user = user;
                    next();
                }

                if (!user) {
                    res.json({ status: 401, data: "Are you sure you entered the correct username?" });
                }
            });
    }

    private doesTheUsersPasswordMatch(req: Request, res: Response, next: NextFunction): void {
        // compare the password the user sent down to the to the password we got from the database.
        bcrypt.compare(req.params.password, res.locals.user.password, (error, result) => {
            if (error) {
                return next(error);
            }
            // if the passwords match
            if (result) {
                //create a response local variable that only stores the users database id and if they are left wing or right wing.
                res.locals.tokenData = {
                    id: res.locals.user._id,
                    leftOrRight: res.locals.user.leftOrRight,
                };
                next();
            } else {
                res.json({ status: 401, data: "Are you sure you entered the correct password?" });
            }
        });
    }

    private doesTheUserExistInTheDatabase(req: Request, res: Response, next: NextFunction): void {
        User.findOne({ 'name': req.body.name },
            (error, user) => {
                // TODO: some kind of error handling for the future.
                if (error) throw error;

                if (user) {
                    // tell the client the user already exists.
                    res.json({ status: 422, data: 'This user already exists' });
                }

                if (!user) {
                    next();
                }
            });
    }

    private createNewUserFromModel(req: Request, res: Response, next: NextFunction): void {
        res.locals.newUser = new User({
            name: req.body.name,
            password: req.body.pass
        });
        next();
    }

    private saveNewUserToDatabase(req: Request, res: Response, next: NextFunction): void {
        res.locals.newUser.save((error, user) => {
            // TODO: some kind of error handling for the future.
            if (error) throw error;
            res.json({ status: 200, data: 'You have successfully registered' });
        });
    }

}

export default new UserAuthenication().router;
