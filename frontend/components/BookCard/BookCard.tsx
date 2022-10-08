import type { Book } from '@lily-bookshop-website/schema'

type BookCardProps = Book

export const BookCard = (props: BookCardProps): JSX.Element => {
  return <div>Book card... {JSON.stringify(props)}</div>
}
