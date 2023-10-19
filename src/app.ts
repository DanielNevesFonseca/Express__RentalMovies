import "express-async-errors";
import express, { Application, json } from "express";
import { router } from "./routes";
import { errorsHandler } from "./middlewares/errorsHandler.middleware";

const app: Application = express();

app.use(json());

app.use("/", router);

app.use(errorsHandler);

export default app;
