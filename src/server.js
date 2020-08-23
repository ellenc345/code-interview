import express from "express";
import { initBodyParserMiddleware } from "./api/Middleware/index.js";
import { initRoutes } from "./api/routes/index.js";
import { serverConfig } from "./config/config.js";

const createServer = () => {
  const app = express();
  initBodyParserMiddleware(app);
  initRoutes(app);
  app.use((error, res) => {
    res.status(error.status || 500).send(error.message);
  });

  app.listen(serverConfig.port, serverConfig.hostName, () => {
    console.log(
      `Server listen on port: ${serverConfig.port} hostName: ${serverConfig.hostName}`
    );
  });
};

export default createServer;
