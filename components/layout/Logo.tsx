import { site } from '@/content/site'

type Props = {
  id?: string
  className?: string
}

export default function LogoArch({ id = 'logo-arc', className = '' }: Props) {
  return (
    <svg
      viewBox="0 0 400 118"
      role="img"
      aria-label={site.name}
      className={className}
    >
      <path id={id} d="M 18 104 Q 200 8 382 104" fill="none" />
      <text
        fontSize="56"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: 'var(--font-script)' }}
      >
        <textPath href={`#${id}`} startOffset="50%">
          {site.name}
        </textPath>
      </text>
    </svg>
  )
}