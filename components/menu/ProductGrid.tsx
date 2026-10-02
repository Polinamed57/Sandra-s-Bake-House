import type { Product } from '@/lib/types'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          index={index}
          total={products.length}
        />
      ))}
    </div>
  )
}
