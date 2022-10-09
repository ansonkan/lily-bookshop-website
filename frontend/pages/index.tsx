import type { NextPage, GetServerSideProps } from 'next'
import type { BookDocument } from '@lily-bookshop-website/schema'

import Head from 'next/head'

import { BookCard } from '@components'

interface HomePageProps {
  featuredBooks: BookDocument[]
  hottestBooks: BookDocument[]
  topRatedBooks: BookDocument[]
}

const HomePage: NextPage<HomePageProps> = ({
  featuredBooks,
  hottestBooks,
  topRatedBooks,
}) => {
  return (
    <div display="flex" flex="col" gap="8">
      <Head>
        <title>Lily Bookshop</title>
        <meta name="description" content="Lily Bookshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div display="flex" flex="col" gap="4">
        <h1 text="2xl" font="bold">
          Welcome to the Lily Bookshop website demo!
        </h1>

        <p>
          The is a bare-bones website is made to demonstrate the basic ideas of
          what the future website could be. The visual is basically non-existent
          here but some of the core features are functional, including:
        </p>

        <ul className="list-circle ml-10">
          <li>Book search</li>
          <li>Home, Search, Book details pages</li>
        </ul>
      </div>

      <div display="flex" flex="col" gap="4">
        <h2 text="xl" font="bold">
          Featured
        </h2>

        <div display="grid" grid="cols-1 sm:cols-2 lg:cols-3" gap="4 sm:8">
          {featuredBooks.map((data) => (
            <BookCard key={data._id} {...data} />
          ))}
        </div>
      </div>

      <div display="flex" flex="col" gap="4">
        <h2 text="xl" font="bold">
          Top rated
        </h2>

        <div display="grid" grid="cols-1 sm:cols-2 lg:cols-3" gap="4 sm:8">
          {topRatedBooks.map((data) => (
            <BookCard key={data._id} {...data} />
          ))}
        </div>
      </div>

      <div display="flex" flex="col" gap="4">
        <h2 text="xl" font="bold">
          Hottest
        </h2>

        <div display="grid" grid="cols-1 sm:cols-2 lg:cols-3" gap="4 sm:8">
          {hottestBooks.map((data) => (
            <BookCard key={data._id} {...data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  res,
}) => {
  const apiUrl = process.env.API_URL

  if (!apiUrl) throw new Error('Something went wrong...')

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=86400'
  )

  const results = await Promise.allSettled([
    fetch(`${apiUrl}/books?limit=3`),
    fetch(`${apiUrl}/books?limit=6&sort=searched_count&order=desc`),
    fetch(`${apiUrl}/books?limit=6&sort=average_rating&order=desc`),
  ])

  return {
    props: {
      featuredBooks:
        results[0].status === 'rejected' ? [] : await results[0].value.json(),
      hottestBooks:
        results[1].status === 'rejected' ? [] : await results[1].value.json(),
      topRatedBooks:
        results[2].status === 'rejected' ? [] : await results[2].value.json(),
    },
  }
}
