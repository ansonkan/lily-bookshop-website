import type { NextPage, GetServerSideProps } from 'next'
import type { BookDocument } from '@lily-bookshop-website/schema'

import Head from 'next/head'
import Link from 'next/link'
import TagChevron from '~icons/ph/tag-chevron.jsx'

import { BookCard, Breadcrumbs } from '@components'
import { usePagingLinks } from '@hooks'

interface BooksPageProps {
  books: BookDocument[]
}

const BooksPage: NextPage<BooksPageProps> = ({ books }) => {
  const { prevHref, nextHref } = usePagingLinks()

  return (
    <div display="flex" flex="col" gap="8">
      <Head>
        <title>Book list | Lily Bookshop</title>
        <meta name="description" content="Lily Bookshop, book list" />
      </Head>

      <Breadcrumbs />

      <div display="grid" grid="cols-1" gap="4 sm:8">
        {books.map((data) => (
          <BookCard key={data._id} {...data} mode="detailed" />
        ))}
      </div>

      <div display="flex" justify="center" align="items-center" gap="2 sm:4">
        {prevHref && (
          <Link href={prevHref}>
            <a display="flex" align="items-center" gap="2">
              <TagChevron className="transform rotate-180" />
              Previous
            </a>
          </Link>
        )}

        {/* BE should return a total count for pagination */}
        {books.length === 10 && nextHref && (
          <Link href={nextHref}>
            <a display="flex" align="items-center" gap="2">
              Next
              <TagChevron />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<BooksPageProps> = async ({
  res,
  query,
}) => {
  const apiUrl = process.env.API_URL

  if (!apiUrl) throw new Error('Something went wrong...')

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=86400'
  )

  const q = query?.q
  const searchParams = new URLSearchParams()

  if (typeof query?.limit === 'string') {
    searchParams.append('limit', query.limit)
  }

  if (typeof query?.skip === 'string') {
    searchParams.append('skip', query.skip)
  }

  if (typeof q === 'string') {
    searchParams.append('q', q)

    const result = await fetch(
      `${apiUrl}/books/search?${searchParams.toString()}`
    )

    return {
      props: {
        books: await result.json(),
      },
    }
  }

  const result = await fetch(`${apiUrl}/books?${searchParams.toString()}`)

  return {
    props: {
      books: await result.json(),
    },
  }
}

export default BooksPage
