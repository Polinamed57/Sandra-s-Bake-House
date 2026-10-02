type IconProps = {
  className?: string
}

export function GmailIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="2" fill="#fff" stroke="#EA4335" strokeWidth="1.8" />
      <path d="M3.5 6.5 12 13l8.5-6.5" fill="none" stroke="#EA4335" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  )
}

export function OutlookIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="3" width="20" height="18" rx="3" fill="#0078D4" />
      <ellipse cx="12" cy="12" rx="4.2" ry="5" fill="none" stroke="#fff" strokeWidth="2.2" />
    </svg>
  )
}

export function InstagramIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ig-gradient" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#F58529" />
          <stop offset="0.5" stopColor="#DD2A7B" />
          <stop offset="1" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5.5" fill="none" stroke="url(#ig-gradient)" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="url(#ig-gradient)" strokeWidth="2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="#DD2A7B" />
    </svg>
  )
}

export function MailIcon({ className = 'size-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}
