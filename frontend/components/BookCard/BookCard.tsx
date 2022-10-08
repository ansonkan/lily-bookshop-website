import type { Book } from '@lily-bookshop-website/schema'

type BookCardProps = Book

export const BookCard = ({
  thumbnail,
  title,
  subtitle,
  authors,
}: BookCardProps): JSX.Element => {
  return (
    <div display="flex" flex="row" gap="2">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={thumbnail} alt={title} width="128" className="self-start" />

      <div display="flex" flex="col" gap="2">
        <div>
          <span font="bold">{title}</span>
          {subtitle && <span> - {subtitle}</span>}
        </div>

        {authors && <div>Authors: {authors.replaceAll(';', ', ')}</div>}
      </div>
    </div>
  )
}
