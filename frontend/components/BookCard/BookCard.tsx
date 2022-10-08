import type { Book } from '@lily-bookshop-website/schema'

interface BookCardProps extends Book {}

export const BookCard = (props: BookCardProps): JSX.Element => {
  return <div>Book card... {JSON.stringify(props)}</div>
}
