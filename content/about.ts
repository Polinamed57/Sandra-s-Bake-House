import type { AboutBlock, AboutPhoto } from '@/lib/types'

const shadow = 'drop-shadow-[0_18px_20px_rgba(36,1,1,0.28)]'

export const aboutHero = {
  heading: 'Big cookies, small batches.',
  intro:
    "Sandra's Bake House makes big, soft, NYC-style cookies for Edmonton cafés and coffee shops.",
  photos: [
    {
      src: '/images/about/maple-stack.webp',
      width: 810,
      height: 1000,
      alt: 'A stack of three Maple Cinnamon Crunch cookies with granola and maple glaze',
      className: `right-[8%] top-1/2 h-72 w-auto -translate-y-1/2 rotate-[6deg] lg:h-[27rem] ${shadow}`,
    },
  ] satisfies AboutPhoto[],
}

export const aboutTip = {
  title: 'Unwrap & warm me up',
  text: 'A quick warm-up brings back that soft, fresh-from-the-oven feel. Your staff get simple handling and storage instructions with every order.',
}

// Sandra's own words, lightly edited. To add a block, copy one, and keep
// alternating `side` so the photos swap sides down the page.
export const aboutBlocks: AboutBlock[] = [
  {
    id: 'idea',
    heading: 'In the oven for a while',
    paragraphs: [
      'The idea of a cookie business had been “in the oven” for quite some time before we were ready to give it a try.',
      'Sandra loves baking so much that she keeps at it at home even after a long shift at the bakery, so the chance to share her own product with others means everything. That is what drives us further, and what turned a simple dream into reality.',
    ],
    side: 'left',
    photos: [
      {
        src: '/images/about/lemon-hand.webp',
        width: 988,
        height: 1000,
        alt: 'A hand holding a Lemon Drizzle cookie broken in half to show the soft centre',
        className: `bottom-0 left-0 h-64 w-auto lg:h-[26rem] ${shadow}`,
        fade: 'bottom',
      },
      {
        src: '/images/about/milk-top-b.webp',
        width: 560,
        height: 521,
        alt: '',
        className: `bottom-6 right-[4%] h-28 w-auto rotate-[24deg] lg:bottom-12 lg:h-48 ${shadow}`,
      },
    ],
  },
  {
    id: 'recipe',
    heading: 'Two months to get it right',
    paragraphs: [
      "Sandra's commercial baking experience, combined with a deep love for baking, became Sandra's Bake House.",
      'It took us two months just to perfect the recipe and see the result exactly the way we pictured it.',
    ],
    side: 'right',
    photos: [
      {
        src: '/images/about/wrapped-hand.webp',
        width: 842,
        height: 1000,
        alt: 'A hand holding a cookie in its clear wrapper',
        className: `right-0 top-0 h-64 w-auto lg:h-[26rem] ${shadow}`,
        backdrop: 'left-[-6%] top-[40%] w-[78%] bg-blush-deep/45',
      },
      {
        src: '/images/about/lemon-top.webp',
        width: 557,
        height: 560,
        alt: '',
        className: `left-[8%] top-[6%] h-24 w-auto rotate-[16deg] lg:top-[8%] lg:h-40 ${shadow}`,
      },
    ],
  },
  {
    id: 'box',
    heading: 'The moment you open the box',
    paragraphs: [
      'When a café owner opens our box, we want them to feel three things.',
      'Confidence in the quality of the product. Confidence that it will be profitable for the café. And, of course, the smell of handmade cookies.',
    ],
    side: 'left',
    photos: [
      {
        src: '/images/about/maple-hand.webp',
        width: 906,
        height: 1000,
        alt: 'A hand holding a Maple Cinnamon Crunch cookie with granola and maple glaze',
        className: `bottom-0 left-0 h-64 w-auto lg:h-[26rem] ${shadow}`,
        fade: 'bottom',
      },
      {
        src: '/images/about/walnut-broken.webp',
        width: 700,
        height: 477,
        alt: 'Walnut Chocolate Chip cookies broken open to show chocolate and walnuts',
        className: `bottom-4 right-[4%] h-24 w-auto -rotate-[8deg] lg:bottom-20 lg:h-40 ${shadow}`,
      },
    ],
  },
  {
    id: 'favourite',
    heading: 'Our favourite',
    paragraphs: [
      'All our flavours turned out absolutely irresistible, but there is one we keep coming back to.',
    ],
    quote: {
      text: "As a chocolate lover, I'd choose the Double Chocolate Salted Caramel in a heartbeat.",
      attribution: 'Sandra',
    },
    link: {
      label: 'See the flavour',
      href: '/menu#double-chocolate-salted-caramel',
    },
    side: 'right',
    photos: [
      {
        src: '/images/about/double-hand.webp',
        width: 1000,
        height: 954,
        alt: 'A hand holding a Double Chocolate Salted Caramel cookie with a gooey caramel centre',
        className: `right-0 top-0 h-64 w-auto -scale-x-100 lg:h-[27rem] drop-shadow-[0_26px_26px_rgba(36,1,1,0.42)]`,
        fade: 'top',
      },
    ],
  },
]

export const aboutFeaturePhoto = {
  src: '/images/about/box-heart.jpg',
  width: 1800,
  height: 1200,
  alt: 'Nine individually wrapped cookies on a pink table, with the shadow of two hands making a heart',
  caption: 'Every order, packed by hand.',
}
