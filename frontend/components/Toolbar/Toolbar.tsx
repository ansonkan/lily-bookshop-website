import { useState } from 'react'

import { Mode } from './types'
import { NormalMode, SearchMode } from './components'

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
        <NormalMode onSearchButtonClick={() => setMode('search')} />
      )}

      {mode === 'search' && (
        <SearchMode onCloseButtonClick={() => setMode('normal')} />
      )}
    </div>
  )
}
