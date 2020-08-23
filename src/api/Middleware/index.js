import bodyParser from "body-parser";

export const initBodyParserMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};