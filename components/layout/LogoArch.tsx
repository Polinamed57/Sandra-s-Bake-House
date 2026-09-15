import { site } from '@/content/site'

type Props = {
  id?: string
  className?: string
}

export default function LogoArch({ id = 'logo-arc', className = '' }: Props) {
  return (
    <svg
      viewBox="-30 0 520 150"
      role="img"
      aria-label={site.name}
      className={className}
    >
      <path id={id} d="M -20 132 Q 230 14 480 132" fill="none" />
      <text
        fontSize="64"
        textAnchor="middle"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
        paintOrder="stroke"
        style={{ fontFamily: 'var(--font-script)' }}
      >
        <textPath href={`#${id}`} startOffset="50%">
          {site.name}
        </textPath>
      </text>
    </svg>
  )
}