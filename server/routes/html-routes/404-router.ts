import { Router, Request, Response } from 'express';
import * as path from 'path';


export class FourOhFourRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get('*', this.sendClientFourOhFourPage);
    }


    private sendClientFourOhFourPage(req: Request, res: Response): void {
        res.sendFile(path.join(__dirname + '/../../public/404.html'));
    }
}

export default new FourOhFourRouter().router;
