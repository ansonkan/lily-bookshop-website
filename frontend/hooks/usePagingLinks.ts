import { useMemo } from 'react'
import { useRouter } from 'next/router'

interface UsePagingLinksProps {
  step?: number
}

interface UsePagingLinksResult {
  prevHref?: string | undefined
  nextHref?: string | undefined
}

export function usePagingLinks(): UsePagingLinksResult
export function usePagingLinks({
  step = 10,
}: UsePagingLinksProps = {}): UsePagingLinksResult {
  const router = useRouter()

  return useMemo(() => {
    const searchParams = new URLSearchParams(
      Object.entries(router.query)
        .filter(([, value]) => value !== undefined)
        .map(([key, value]) => [
          key,
          Array.isArray(value) ? value.join(',') : `${value}`,
        ])
    )

    const _skip = searchParams.get('skip')
    if (_skip === null) {
      searchParams.append('skip', '0')
    }

    const existingSkip = parseInt(_skip || '0')
    const skip = isNaN(existingSkip) ? 0 : existingSkip
    const prev = skip - step
    const next = skip + step

    searchParams.set('skip', `${prev}`)
    const prevHref = `?${searchParams.toString()}`

    searchParams.set('skip', `${next}`)
    const nextHref = `?${searchParams.toString()}`

    return {
      prevHref: prev >= 0 ? prevHref : undefined,
      nextHref: next >= 0 ? nextHref : undefined,
    }
  }, [router.query, step])
}
