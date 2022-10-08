import { object, string, number, InferType } from 'yup'

export const bookSchema = object({
  isbn13: string().required(),
  isbn10: string().required(),
  title: string().required(),
  subtitle: string(),
  authors: string(),
  categories: string(),
  thumbnail: string(),
  description: string(),
  published_year: string(),
  average_rating: number(),
  num_pages: number(),
  ratings_count: number(),
})

export type Book = InferType<typeof bookSchema>
