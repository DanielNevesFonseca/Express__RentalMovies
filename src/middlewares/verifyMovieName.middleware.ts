import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import AppError from "../errors/AppError.error";

export const verifyMovieName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundMovie: Movie | null = await movieRepo.findOneBy({
    name: req.body.name,
  });

  if (req.body.name && foundMovie)
    throw new AppError("Movie already exists.", 409);

  return next();
};
