import { TMoviesRead } from "./movies.interface";

export type TPagination = {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: TMoviesRead;
};

export type TPaginationParams = {
  page: number;
  perPage: number;
  prevPage: string | null;
  nextPage: string | null;
  order: string;
  sort: string;
};
