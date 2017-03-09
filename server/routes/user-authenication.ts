import { Router, Request, Response, NextFunction } from "express";


import User from "../models/User";

export class UserAuthenication {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/registeruser", this.doesTheUserExistInTheDatabase, this.createNewUserFromModel, this.saveNewUserToDatabase);
        // TODO: login user route
    }


    private doesTheUserExistInTheDatabase(req: Request, res: Response, next: NextFunction) {
        User.findOne({"name": req.body.name},
        (error, user) => {
            // TODO: some kind of error handling for the future.
            if (error) throw error;

            if (user) {
                // tell the client the user already exists.
                res.json({status: 422, data: "This user already exists"});
            }

            if (!user) {
                next();
            }
        });
    }

    private createNewUserFromModel(req: Request, res: Response, next: NextFunction) {
        res.locals.newUser = new User({
            name: req.body.name,
            password: req.body.password
        });
        next();
    }

    

    private saveNewUserToDatabase(req: Request, res: Response, next: NextFunction) {
       res.locals.newUser.save((error) => {
           // TODO: some kind of error handling for the future.
           if (error) throw error;

            // TODO: send JSON web token back to user and perform some kind of redirect. Can the the redirect be hanlded via angular or does it have to be here?
           res.json({status: 200, data: ""});
       });
    }
}

export default new UserAuthenication().router;