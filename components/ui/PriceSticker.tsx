import { formatPrice } from '@/lib/utils'

type Props = {
  price: number
  className?: string
}

export default function PriceSticker({ price, className = '' }: Props) {
  return (
    <div
      className={`flex size-36 -rotate-8 flex-col items-center justify-center rounded-full bg-blush text-cocoa ${className}`}
    >
      <div className="flex size-[8rem] flex-col items-center justify-center rounded-full border-2 border-dashed border-cocoa/60">
        <span className="text-xs font-medium">from</span>
        <span className="font-sandra text-4xl font-semibold leading-tight">
          {formatPrice(price)}
        </span>
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
          Wholesale
        </span>
      </div>
    </div>
  )
}
