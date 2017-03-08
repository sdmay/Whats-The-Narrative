import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";
import * as path from "path";
import * as jwt from "jsonwebtoken";

import Routes from "../routes/routes-index";

import User from "../models/User";

class App {
    app: express.Express;

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
        this.app.use(express.static("./client"));
    }

    private routes(): void {
        

        

        this.app.use("/api", Routes);

        // Test going to fix with TS.
        this.app.post("/userauth/signinuser" , (req, res) => {
        console.log(req.body);
           let newUser = new User({
               name: req.body.user.name,
               password: req.body.user.password
           });
           newUser.save((err) => {
                console.log("saved")
           });

        });


        this.app.get("*", (req, res) => {
            res.sendFile(path.join(__dirname + "/../../client/index.html"));
        });




        






    }

};

export default new App().app;