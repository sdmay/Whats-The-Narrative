
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

import Routes from '../routes/routes-index';
import ClientHtmlRouter from '../routes/html-routes/client-html-routes';
import FourOhFourRouter from '../routes/html-routes/404-router';

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
    }



    private routes(): void {
        this.app.use('/api', Routes);
        this.app.use('/', ClientHtmlRouter);
        this.app.use('*', FourOhFourRouter);
    }
};

export default new App().app;
