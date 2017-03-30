import app from './config/express';
import * as http from "http";
import * as mongoose from "mongoose";
import * as Promise from "bluebird";

// db config
(<any>mongoose).Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error', (error) => {
  console.log('Mongoose Error: ', error);
});
db.once('open', () => {
  console.log('Mongoose connection successful.');
});

// http config
const PORT: number = process.env.PORT || 8080;
const server: http.Server = http.createServer(app);
server.listen(PORT);
server.on('error', (error: Error) => {
  console.log('Error starting server' + error);
});

server.on('listening', () => {
  console.log('Server started on port ' + PORT);
});

export default app;
