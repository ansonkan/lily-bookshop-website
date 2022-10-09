import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import XFill from '~icons/ph/x-fill'
import ArrowClockwise from '~icons/ph/arrow-clockwise'

interface SearchModeProps {
  initValue?: string
  onCloseButtonClick?: () => void
}

export const SearchMode = ({
  initValue,
  onCloseButtonClick,
}: SearchModeProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState(initValue ?? '')

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <form action="/books" method="get" flex="grow">
        <input
          placeholder="Search for books here"
          focus="outline-none"
          name="q"
          w="full"
          bg="transparent"
          required
          autoComplete="off"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          onKeyDown={(event) => {
            if (event.code === 'Escape') {
              onCloseButtonClick?.()
            }
          }}
          ref={inputRef}
        />
      </form>

      {value && (
        <Link href="/books">
          <button
            onClick={() => {
              setValue('')
              inputRef.current?.focus()
            }}
          >
            <ArrowClockwise />
          </button>
        </Link>
      )}

      <button onClick={() => onCloseButtonClick?.()}>
        <XFill />
      </button>
    </>
  )
}
