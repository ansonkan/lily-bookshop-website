import type { NextPage, GetServerSideProps } from 'next'
import type { BookDocument } from '@lily-bookshop-website/schema'

import Head from 'next/head'
import ImageFill from '~icons/ph/image-fill.jsx'

import { BookCard, Breadcrumbs, Data } from '@components'

interface BookPageProps {
  book: BookDocument
  relatedBooks: BookDocument[]
}

const BookPage: NextPage<BookPageProps> = ({
  book: {
    isbn13,
    isbn10,
    title,
    subtitle,
    authors,
    categories,
    thumbnail,
    description,
    published_year,
    average_rating,
    num_pages,
    ratings_count,
  },
  relatedBooks,
}) => {
  return (
    <div display="flex" flex="col" gap="8">
      <Head>
        <title>{title} | Lily Bookshop</title>
        <meta name="description" content={`"Lily Bookshop, ${title}"`} />
      </Head>

      <Breadcrumbs />

      <div display="flex" flex="row" gap="4 sm:8">
        <div display="flex" flex="col grow" gap="4 sm:8">
          <div>
            <h1 font="bold" text="2xl break-words">
              {title}
            </h1>

            {subtitle && <div>{subtitle}</div>}
          </div>

          <div display="grid" grid="cols-1 sm:cols-2 lg:cols-3" gap="2 sm:4">
            <Data
              label="Authors"
              value={authors ? authors.replaceAll(';', ', ') : ''}
            />
            <Data label="Categories" value={categories} />
            <Data label="ISBN 13" value={isbn13} />
            <Data label="ISBN 10" value={isbn10} />
            <Data label="Published year" value={published_year} />
            <Data label="Number of pages" value={num_pages} />
            <Data label="Rating" value={average_rating} />
            <Data label="Ratings count" value={ratings_count} />
          </div>

          <Data label="Description" value={description} />
        </div>

        <div
          w="[128px]"
          h="min-[180px]"
          bg="gray-300"
          display="flex"
          justify="center"
          align="items-center"
          flex="shrink-0"
          overflow="hidden"
          className="rounded relative self-start"
        >
          {thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={thumbnail} alt={title} width="128" />
          ) : (
            <ImageFill />
          )}
        </div>
      </div>

      <div display="flex" flex="col" gap="4">
        <h2 text="xl" font="bold">
          You might be interested
        </h2>

        <div display="grid" grid="cols-1 sm:cols-2 lg:cols-3" gap="4 sm:8">
          {relatedBooks.map((data) => (
            <BookCard key={data._id} {...data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<
  BookPageProps,
  NodeJS.Dict<string>
> = async ({ res, params }) => {
  const apiUrl = process.env.API_URL

  if (!apiUrl) throw new Error('Something went wrong...')

  res.setHeader(
    'Cache-Control',
    'public, s-max-age=604800, stale-while-revalidate=86400'
  )

  if (!params?.id) {
    return { notFound: true }
  }

  const result = await fetch(`${apiUrl}/books/${params.id}`)
  const book = await result.json()
  let relatedBooks = []

  if (book.categories) {
    const searchResult = await fetch(
      `${apiUrl}/books/search?q=${book.categories}&limit=3`
    )

    relatedBooks = await searchResult.json()
  }

  return {
    props: {
      book,
      relatedBooks,
    },
  }
}

export default BookPage
