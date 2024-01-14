import { Movie } from "../entities";
import { TPaginationParams } from "../interfaces/pagination.interface";
import { movieRepo } from "../repositories";

export const createMovieService = async (
  data: Omit<Movie, "id">
): Promise<Movie> => {
  const newMovie: Movie = await movieRepo.save(data);

  return newMovie;
};

export const readMovieService = async ({
  nextPage,
  page,
  perPage,
  prevPage,
  order,
  sort,
}: TPaginationParams): Promise<any> => {
  const [movies, count] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    data: movies,
    count,
  };
};

export const updateMovieService = async (
  movie: Movie,
  data: Partial<Movie>
): Promise<Movie> => {
  return await movieRepo.save({ ...movie, ...data });
};

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  await movieRepo.remove(movie);
};
