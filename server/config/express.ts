import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";

import Routes from "../routes/routes-index";

class App {
    app: express.Express = express();

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.app.use(logger("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.text());
        this.app.use(bodyParser.json({ type: "application/vnd.api+json" }));
        this.app.use(express.static("./public"));
    }

    private routes(): void {
        this.app.use("/api", Routes);
    }

};

export default new App().app;