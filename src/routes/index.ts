import { Router } from "express";
import { moviesRouter } from "./movies.router";

export const router: Router = Router();

router.use("/movies", moviesRouter);
