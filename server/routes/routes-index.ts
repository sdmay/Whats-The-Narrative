import { Router, Request, Response, NextFunction } from "express";

// TODO: import subrouters


class Routers {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        // TODO : put reference to sub routers here.
    }
}


export default new Routers().router;