import { Router, Request, Response, NextFunction } from 'express';


import User from '../models/User';

export class UserAuthenication {
router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post('/registeruser',
            this.doesTheUserExistInTheDatabase, this.createNewUserFromModel,
            this.saveNewUserToDatabase);
        this.router.get('/login/:name/:password', this.userIsTrue);
        // TODO: login user route
    }

    private test(req: Request, res: Response, next: NextFunction): void {
        // console.log(req.params.name, req.params.password);
    }

public userIsTrue (req: Request, res: Response, next: NextFunction): void {
    console.log(req.params.password + "WHAT");
    console.log(req.params.username     + "loooohhhzzzzzzzzzzzzzzzz")
    console.log(req.params.name + "WHOmmmm");
 User.findOne({ 'name': req.params.name },
     (error, name) => {
                console.log(name)
                // TODO: some kind of error handling for the future.
                if (error) throw error;

                if (name) {
                        console.log("USER");
                    return res.json();
                    // this.router.navigate(['/dashboard']) ;
                     }

                if (!name) {
                    return false;
                }
            });
    }
    private doesTheUserExistInTheDatabase(req: Request, res: Response, next: NextFunction): void {
        User.findOne({ 'name': req.body.user },
            (error, user) => {
                console.log(user)
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
        res.locals.newUser.save((user, error) => {
            // TODO: some kind of error handling for the future.
            if (error) throw error;
            // TODO: send JSON web token back to user and perform some kind of redirect.
            //    Can the the redirect be hanlded via angular or does it have to be here?
            res.json({ status: 200, data: '' });
        });
    }
   
}

export default new UserAuthenication().router;
