type Props = {
  className?: string
}

export default function CookieDivider({ className = '' }: Props) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="block h-px w-14 bg-blossom-200/45 sm:w-20" />
      <svg width="34" height="34" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="16" className="fill-dough" />
        <circle cx="14" cy="16" r="3" className="fill-cocoa" />
        <circle cx="26" cy="19" r="3" className="fill-cocoa" />
        <circle cx="18" cy="26" r="3" className="fill-cocoa" />
        <circle cx="27" cy="27" r="2.2" className="fill-cocoa" />
      </svg>
      <span className="block h-px w-14 bg-blossom-200/45 sm:w-20" />
    </div>
  )
}