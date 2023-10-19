import { Request, Response } from "express";
import {
  createMovieService,
  deleteMovieService,
  readMovieService,
  updateMovieService,
} from "../services/movie.service";
import { Movie } from "../entities";

export const createMovieController = async (req: Request, res: Response) => {
  const newMovie = await createMovieService(req.body);

  return res.status(201).json(newMovie);
};

export const readMovieController = async (req: Request, res: Response) => {
  const movies = await readMovieService(res.locals.pagination);

  return res.status(200).json(movies);
};

export const updateMovieController = async (req: Request, res: Response) => {
  const { foundMovie } = res.locals;
  const updatedMovie: Movie = await updateMovieService(foundMovie, req.body);

  return res.status(200).json(updatedMovie);
};

export const deleteMovieController = async (req: Request, res: Response) => {
  await deleteMovieService(res.locals.foundMovie);

  return res.status(204).json();
};
