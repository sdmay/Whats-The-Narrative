import * as http from "http";

import app from "./config/express";

// Init the express application
const PORT: number = process.env.PORT || 8080;

const server: http.Server = http.createServer(app);

server.listen(PORT);

server.on("error", (error : Error) => {
  console.log("Error starting server" + error);
});

server.on("listening", () => {
  console.log("Server started on port " + PORT);
});