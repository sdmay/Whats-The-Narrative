import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';
import passport = require('passport');
import cookieParser = require('cookie-parser');


import Routes from '../routes/routes-index';
import User from '../models/User';

class App {
    app: express.Express;

    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.app.use(logger('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.text());
        this.app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
        this.app.use(express.static('./dist'));
        this.app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
        this.app.use(cookieParser());
    }



    private routes(): void {
        this.app.use('/api', Routes);
        this.app.get('*', (req: express.Request, res: express.Response) => {
            res.sendFile(path.join(__dirname + '/../../dist/index.html'));
        });
    }
};

export default new App().app;