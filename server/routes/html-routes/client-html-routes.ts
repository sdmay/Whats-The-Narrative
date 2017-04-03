import { Router, Request, Response } from 'express';
import * as path from 'path';


export class ClientHtmlRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use('/home', this.sendClientTheApp);
        this.router.use('/people', this.sendClientTheApp);
        this.router.use('/trending', this.sendClientTheApp);
        this.router.use('/politics', this.sendClientTheApp);
        this.router.use('/money', this.sendClientTheApp);
        this.router.use('/health', this.sendClientTheApp);
        this.router.use('/about', this.sendClientTheApp);
        this.router.use('/team', this.sendClientTheApp);
        this.router.use('/searchresults', this.sendClientTheApp);
        this.router.use('/contact', this.sendClientTheApp);
        this.router.use('/signup', this.sendClientTheApp);
        this.router.use('/signin', this.sendClientTheApp);
    }

    private sendClientTheApp(req: Request, res: Response): void {
        res.sendFile(path.join(__dirname + '/../../../dist/index.html'));
    }
}

export default new ClientHtmlRouter().router;
