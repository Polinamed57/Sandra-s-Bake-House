import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getLowestPrice } from '@/content/products'
import { formatPrice } from '@/lib/utils'

export const alt = "Sandra's Bake House: wholesale NYC-style cookies for Edmonton cafés"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const COCOA = '#240101'
const BLUSH = '#f4d3d4'
const CREAM = '#fff7f5'

// The image renderer can't read the site's web fonts or variable fonts,
// so static TTF copies live in assets/og
const assets = join(process.cwd(), 'assets/og')

export default async function OpengraphImage() {
  const [bodoni, bigShoulders, poppins, cookie] = await Promise.all([
    readFile(join(assets, 'BodoniModa-Regular.ttf')),
    readFile(join(assets, 'BigShoulders-Medium.ttf')),
    readFile(join(assets, 'Poppins-Medium.ttf')),
    readFile(join(assets, 'maple-stack.png')),
  ])
  const cookieSrc = `data:image/png;base64,${cookie.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: '100%', height: '100%', background: COCOA, color: CREAM }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: 80, width: 700 }}>
          <div style={{ fontFamily: 'Bodoni', fontSize: 132, lineHeight: 1 }}>Sandra&rsquo;s</div>
          <div style={{ fontFamily: 'Big Shoulders', fontSize: 112, lineHeight: 1, marginTop: 6 }}>
            Bake House
          </div>
          <div style={{ fontFamily: 'Poppins', fontSize: 30, color: BLUSH, marginTop: 34 }}>
            Wholesale NYC-style cookies for Edmonton cafés
          </div>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              marginTop: 30,
              padding: '12px 26px',
              borderRadius: 999,
              background: BLUSH,
              color: COCOA,
              fontFamily: 'Poppins',
              fontSize: 26,
            }}
          >
            {`From ${formatPrice(getLowestPrice())} · Individually wrapped`}
          </div>
        </div>
        <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <img src={cookieSrc} width={406} height={502} alt="" style={{ transform: 'rotate(6deg)' }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Bodoni', data: bodoni, style: 'normal', weight: 400 },
        { name: 'Big Shoulders', data: bigShoulders, style: 'normal', weight: 500 },
        { name: 'Poppins', data: poppins, style: 'normal', weight: 500 },
      ],
    },
  )
}
