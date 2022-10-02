import type { NextPage, GetServerSideProps } from 'next'

interface BookPageProps {
  id?: string
  name?: string
}

const BookPage: NextPage<BookPageProps> = ({ id, name }) => {
  return (
    <main>
      <h1>Book page</h1>

      {!id || !name ? (
        <div>Book not found!</div>
      ) : (
        <>
          <h2>Name: {name}</h2>
          <p>ID: {id}</p>
        </>
      )}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<
  BookPageProps,
  NodeJS.Dict<string>
> = async ({ res, params }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  if (!params?.id) {
    return { notFound: true }
  }

  return {
    props: { name: 'The Funny Book', id: params.id },
  }
}

export default BookPage
