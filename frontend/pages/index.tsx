import type { NextPage } from 'next'
import Head from 'next/head'

import { BookCard } from '@components'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lily Bookshop</title>
        <meta name="description" content="Lily Bookshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>this is the home page...</div>

      <BookCard
        isbn13={''}
        isbn10={''}
        title={''}
        subtitle={undefined}
        authors={undefined}
        categories={undefined}
        thumbnail={undefined}
        description={undefined}
        published_year={undefined}
        average_rating={undefined}
        num_pages={undefined}
        ratings_count={undefined}
      />

      {/* Welcoming section + search  */}

      {/* Hottest books (most searched) */}
    </div>
  )
}

export default Home
