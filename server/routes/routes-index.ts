import { Router } from "express";

import UserAuthenication from "./user-authenication";


class Routers {
    router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.use("/userauth", UserAuthenication);
        // TODO : put reference to sub routers here (external api calls etc).
    }
}


export default new Routers().router;