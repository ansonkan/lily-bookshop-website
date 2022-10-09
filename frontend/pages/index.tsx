import type { NextPage, GetServerSideProps } from 'next'
import type { BookDocument } from '@lily-bookshop-website/schema'

import Head from 'next/head'
import PlayFill from '~icons/ph/play-fill.jsx'
import SmileyFill from '~icons/ph/smiley-fill.jsx'

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
          <li>
            This demo website has 3 pages:
            <ul className="list-circle ml-10">
              <li>&quot;Home&quot; page - the current page</li>
              <li>
                &quot;Books&quot; page - the page that lists out book search
                results
              </li>
              <li>
                &quot;Book details&quot; page - the page shows all information
                of a selected book
              </li>
            </ul>
          </li>
          <li>
            Book search - If you clicked on the magnifying glass on the toolbar,
            a search bar will appear, type in something, press &quot;Enter&quot;
            or click the <PlayFill /> button on the right, then you will be
            redirected to the &quot;Books&quot; page with the search results.
          </li>
        </ul>

        <p>
          Please be aware that this demo website has absolutely no visual design
          involved at all, the final product will looks better and has more
          features. Yet still I would like to update you all my progress,
          especially I have realized I am not progressing much since we have
          talked last time.
        </p>

        <p>
          If you are still interested in letting me to continue this project,
          here will be my to-do list:
        </p>

        <ul className="list-circle ml-10">
          <li>Support multi-locale</li>
          <li>
            Create pages for book management, including create, remove, update
          </li>
          <li>Protect the book management pages with user authentication</li>
          <li>Improve website design</li>
          <li>
            Plan on how should we digitalize all of your physical books into a
            database (Based on my understanding, most books should have a
            &quot;ISBN 13&quot; or &quot;ISBN 10&quot; barcode that is a
            universal ID for a book. There is likely a free service for ISBN
            lookup. If so, all we need to do is to get a barcode scanner, then
            scan all the books)
          </li>
          <li>Improve searching, such as support tags or multiple keywords</li>
          <li>
            Improve &quot;You might be interested&quot; because now it might
            suggests the same book
          </li>
        </ul>

        <p>
          Or if you have any new ideas, please let me know! <SmileyFill />
        </p>
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
