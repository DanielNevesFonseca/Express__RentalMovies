import { z } from "zod";
import { moviesCreateSchema, moviesSchema } from "../schemas/movies.schema";
import { Movie } from "../entities";
import { DeepPartial } from "typeorm";

export type TMovie = z.infer<typeof moviesSchema>;
export type TMovieCreate = z.infer<typeof moviesCreateSchema>;
export type TMoviesRead = Array<Movie>;
export type TMoviePatch = DeepPartial<TMovieCreate>;
