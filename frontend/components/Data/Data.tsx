import Minus from '~icons/ph/minus'

interface DataProps {
  label: string
  value?: string | string[] | number | number[]
  lineClamp?: boolean
}

export const Data = ({ label, value, lineClamp }: DataProps): JSX.Element => {
  const lineClampClassName = lineClamp ? 'line-clamp-4' : ''

  return (
    <div>
      {label && (
        <div text="gray-400 xs" font="italic">
          {label}
        </div>
      )}

      <div flex="row" gap="2" text="sm">
        {!value ? (
          <Minus />
        ) : Array.isArray(value) ? (
          value.map((v) => (
            <p key={v} className={lineClampClassName}>{`${v}`}</p>
          ))
        ) : (
          <p className={lineClampClassName}>{`${value}`}</p>
        )}
      </div>
    </div>
  )
}
