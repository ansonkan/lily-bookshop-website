import { useEffect, useRef } from 'react'
import XFill from '~icons/ph/x-fill'

interface SearchModeProps {
  onCloseButtonClick?: () => void
}

export const SearchMode = ({
  onCloseButtonClick,
}: SearchModeProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <form action="/books/search" method="get" flex="grow">
        <input
          placeholder="Search for books here"
          focus="outline-none"
          name="q"
          w="full"
          required
          autoComplete="off"
          ref={inputRef}
        />
      </form>

      <button onClick={() => onCloseButtonClick?.()}>
        <XFill />
      </button>
    </>
  )
}
