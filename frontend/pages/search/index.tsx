import type { NextPage, GetServerSideProps } from 'next'

import { useRouter } from 'next/router'

interface SearchPageProps {
  books: string[]
}

const SearchPage: NextPage<SearchPageProps> = ({ books }) => {
  return (
    <main>
      <h1>Search page</h1>

      <ol>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ol>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({
  res,
  query,
}) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  if (!query.q) {
    return { notFound: true }
  }

  return {
    props: { books: ['The Testing Book', 'The Art Book', 'The Gaming Book'] },
  }
}

export default SearchPage
