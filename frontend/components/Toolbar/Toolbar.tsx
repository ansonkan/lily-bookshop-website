import { useState } from 'react'
import Link from 'next/link'

import MagnifyingGlassBold from '~icons/ph/magnifying-glass-bold'
import XFill from '~icons/ph/x-fill'

import { Mode } from './types'

export const Toolbar = (): JSX.Element => {
  const [mode, setMode] = useState<Mode>('normal')

  return (
    <div
      className="sticky toolbar-spacing top-0"
      display="flex gap-4"
      items="center"
      justify="between"
      border="b-1 b-dark"
      z="50"
      backdrop="filter blur"
    >
      {mode === 'normal' && (
        <>
          <h1 font="bold" text="2xl">
            <Link href="/">
              <a>Lily Bookshop</a>
            </Link>
          </h1>

          <div display="flex" gap="1" items="center">
            <button onClick={() => setMode('search')}>
              <MagnifyingGlassBold />
            </button>

            {/* Locale switcher */}
          </div>
        </>
      )}

      {mode === 'search' && (
        <>
          <form action="/books/search" method="get" flex="grow">
            <input
              placeholder="Search for books here"
              focus="outline-none"
              name="q"
              w="full"
              required
              autoComplete="off"
            />
          </form>

          <button onClick={() => setMode('normal')}>
            <XFill />
          </button>
        </>
      )}
    </div>
  )
}
