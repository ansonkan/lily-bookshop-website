import type { BookDocument } from '@lily-bookshop-website/schema'

import Link from 'next/link'
import ImageFill from '~icons/ph/image-fill'

import { Data } from '@components/Data'

interface BookCardProps extends BookDocument {
  mode?: 'simple' | 'detailed'
}

export const BookCard = ({
  _id,
  thumbnail,
  title,
  subtitle,
  authors,
  categories,
  average_rating,
  mode = 'simple',
  description,
  published_year,
}: BookCardProps): JSX.Element => {
  return (
    <div display="flex" flex="row" gap="2">
      <div
        w="[128px]"
        h="min-[180px]"
        bg="gray-300"
        display="flex"
        justify="center"
        align="items-center"
        flex="shrink-0"
        overflow="hidden"
        className="rounded relative self-start"
      >
        {thumbnail ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnail} alt={title} width="128" />
        ) : (
          <ImageFill />
        )}
      </div>

      <div display="flex" flex="col grow" gap="2">
        <div>
          <Link href={`/books/${_id}`}>
            <a font="bold" text="lg break-words">
              {title}
            </a>
          </Link>

          {subtitle && <div>{subtitle}</div>}
        </div>

        <div display="flex" flex="row" gap="2">
          <div
            display="flex"
            gap="2"
            flex={`col ${mode === 'detailed' && 'shrink-0'}`}
            className={`${mode === 'detailed' && 'basis-1/4'}`}
          >
            <Data
              label="Authors"
              value={authors ? authors.replaceAll(';', ', ') : ''}
            />
            <Data label="Categories" value={categories} />
            <Data label="Rating" value={average_rating} />
          </div>

          {mode === 'detailed' && (
            <div className="hidden md:flex" flex="col grow shrink" gap="2">
              <Data label="Description" value={description} lineClamp />
              <Data label="Published year" value={published_year} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
