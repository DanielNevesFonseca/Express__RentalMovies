import { Router } from "express";
import {
  createMovieController,
  deleteMovieController,
  readMovieController,
  updateMovieController,
} from "../controllers/movie.controller";
import { verifyId } from "../middlewares/verifyId.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import {
  moviesCreateSchema,
  moviesPatchSchema,
} from "../schemas/movies.schema";
import { pagination } from "../middlewares/pagination.middleware";
import { verifyMovieName } from "../middlewares/verifyMovieName.middleware";

export const moviesRouter: Router = Router();

moviesRouter.get("/", pagination, readMovieController);
moviesRouter.post(
  "/",
  validateBody(moviesCreateSchema),
  verifyMovieName,
  createMovieController
);

moviesRouter.use("/:movieId", verifyId);
moviesRouter.patch(
  "/:movieId",
  validateBody(moviesPatchSchema),
  verifyMovieName,
  updateMovieController
);
moviesRouter.delete("/:movieId", deleteMovieController);
