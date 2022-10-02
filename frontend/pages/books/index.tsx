import type { NextPage, GetServerSideProps } from 'next'

interface BooksPageProps {
  books: string[]
}

const BooksPage: NextPage<BooksPageProps> = ({ books }) => {
  return (
    <main>
      <h1>Books page</h1>

      <ol>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ol>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<
  BooksPageProps
> = async () => {
  return {
    props: { books: ['The Testing Book', 'The Art Book', 'The Gaming Book'] },
  }
}

export default BooksPage
