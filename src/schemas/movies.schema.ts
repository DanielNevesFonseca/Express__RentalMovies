import { z } from "zod";

export const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish().default(null),
  duration: z.number().positive(),
  price: z.number().positive().int(),
});

export const moviesCreateSchema = moviesSchema
  .partial({ description: true })
  .omit({ id: true });
export const moviesReadSchema = moviesSchema.array();
export const moviesPatchSchema = moviesCreateSchema.partial();
