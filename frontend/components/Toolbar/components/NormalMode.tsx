import Link from 'next/link'
import MagnifyingGlassBold from '~icons/ph/magnifying-glass-bold.jsx'

interface NormalModeProps {
  onSearchButtonClick?: () => void
}

export const NormalMode = ({
  onSearchButtonClick,
}: NormalModeProps): JSX.Element => {
  return (
    <>
      <h1 font="bold" text="2xl">
        <Link href="/">
          <a>Lily Bookshop</a>
        </Link>
      </h1>

      <div display="flex" gap="1" items="center">
        <button onClick={() => onSearchButtonClick?.()}>
          <MagnifyingGlassBold />
        </button>

        {/* Locale switcher */}
      </div>
    </>
  )
}
