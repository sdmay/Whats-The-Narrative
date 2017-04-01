import jwt = require("jsonwebtoken");
import * as path from "path";
import * as fs from "fs";

import { Router, Request, Response, NextFunction } from "express";

export class JsonWebTokenMiddleWare {

    public static getPrivateKey(req: Request, res: Response, next: NextFunction): void {
        let privateKeyFilePath = path.join(__dirname, "../../../ssl/private.pem");
        fs.readFile(privateKeyFilePath, "utf-8", (error, key) => {
            if (error) {
                return next(error);
            } else {
                res.locals.privatekey = key;
                next();
            }
        });
    }

    public static signJsonWebToken(req: Request, res: Response, next: NextFunction): void {
        jwt.sign(res.locals.tokenData, res.locals.privatekey, { algorithm: "RS256", expiresIn: 86400 }, (error, token) => {
            if (error) {
                return next(error);
            } else {
                res.json({ status: 200, token: token, data: "You have successfully signed in" });
            }
        });
    }

    public static getPublicKey(req: Request, res: Response, next: NextFunction): void {
        let publicKeyFilePath = path.join(__dirname, "../../../ssl/public.pem");
        fs.readFile(publicKeyFilePath, "utf-8", (error, key) => {
            if (error) {
                return next(error);
            } else {
                res.locals.publickey = key;
                next();
            }
        });
    }

    public static verifiyJsonWebToken(req: Request, res: Response, next: NextFunction): void {
        jwt.verify(req.headers["x-access-token"], res.locals.publickey, (error, decodedToken) => {
            if (error) {
                return next(error);
            } else {
                // store the users information from the decoded token into a local variable so we can use this information later.
                res.locals.decodedToken = decodedToken;
                next();
            }
        });
    }
};
