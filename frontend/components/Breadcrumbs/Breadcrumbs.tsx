import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import ArrowRight from '~icons/ph/arrow-right'

const capitalize = (str: string): string => {
  return str
    .trim()
    .split(' ')
    .filter((s) => !!s)
    .map((s) =>
      s.length > 1
        ? `${s.charAt(0).toUpperCase()}${s.slice(1)}`
        : s.toUpperCase()
    )
    .join(' ')
}

export const Breadcrumbs = (): JSX.Element => {
  const router = useRouter()

  const parts = router.asPath.split('?')[0].split('/')
  const previous: string[] = []
  const crumbs: Array<{ label: string; href: string }> = []

  for (const p of parts) {
    let label = 'Home'

    if (p) {
      label = capitalize(p)
      previous.push(p)
    } else {
      previous.push('')
    }

    const combined = previous.join('/')
    crumbs.push({ label, href: combined ? combined : '/' })
  }

  return (
    <div
      display="flex"
      flex="row"
      gap="1 md:2"
      text="gray-400 sm"
      align="items-center"
    >
      {crumbs.map(({ label, href }, index) => (
        <Fragment key={href}>
          {index === crumbs.length - 1 ? (
            <div className="overflow-ellipsis whitespace-nowrap overflow-hidden text-black">
              {label}
            </div>
          ) : (
            <Link href={href}>
              <a className="overflow-ellipsis whitespace-nowrap overflow-hidden">
                {label}
              </a>
            </Link>
          )}

          {index !== crumbs.length - 1 && (
            <ArrowRight className="flex-shrink-0 opacity-50" />
          )}
        </Fragment>
      ))}
    </div>
  )
}
