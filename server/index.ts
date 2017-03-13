import * as http from 'http';
import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';

import app from './config/express';

const PORT: number = process.env.PORT || 8080;
const server: http.Server = http.createServer(app);

(<any>mongoose).Promise = Promise;
mongoose.connect('mongodb://admin:admin@ds123370.mlab.com:23370/heroku_m8hpkfsk');
const db = mongoose.connection;


db.on('error', (error) => {
    console.log('Mongoose Error: ', error);
});

db.once('open', () => {
    console.log('Mongoose connection successful.');
    server.listen(PORT);
});

server.on('error', (error : Error) => {
  console.log('Error starting server' + error);
});

server.on('listening', () => {
  console.log('Server started on port ' + PORT);
});

export default app;