import { useState } from 'react'
import { useRouter } from 'next/router'

import { Mode } from './types'
import { NormalMode, SearchMode } from './components'

export const Toolbar = (): JSX.Element => {
  const router = useRouter()
  const searchQuery = router.query.q

  const [mode, setMode] = useState<Mode>(
    typeof searchQuery === 'string' ? 'search' : 'normal'
  )

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
        <SearchMode
          onCloseButtonClick={() => setMode('normal')}
          initValue={typeof searchQuery === 'string' ? searchQuery : undefined}
        />
      )}
    </div>
  )
}
