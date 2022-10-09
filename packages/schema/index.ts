import { object, string, number, SchemaOf } from 'yup'

export interface Book {
  isbn13: string
  isbn10: string
  title: string
  subtitle?: string | undefined
  authors?: string | undefined
  categories?: string | undefined
  thumbnail?: string | undefined
  description?: string | undefined
  published_year?: string | undefined
  average_rating?: number | undefined
  num_pages?: number | undefined
  ratings_count?: number | undefined
}

export const bookSchema: SchemaOf<Book> = object({
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

export type BookDocument = Book & { _id: string }
