import { useEffect, useState } from 'react'
import { getBakeryData } from '../actions/bakery.actions'
import { ProductsPropsType, ProductType } from '../../types'
import Product from './Product'

export default function Products({ handler }: ProductsPropsType) {
  const [products, setProducts] = useState([] as ProductType[])
  const [freeDeliveryOrder, setFreeDeliveryOrder] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const data = await getBakeryData()
      handler(data)
      setProducts(data.products)
      setFreeDeliveryOrder(data.delivery.freeDeliveryOrder)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="px-20 py-10">
      <div className="pb-5 flex flex-col gap-2">
        <h2 className="pb-3 text-2xl">Today's goodies</h2>
        <p>Snatch them up while they're still available!</p>
        <p>Free speedy delivery on all orders over €{freeDeliveryOrder}</p>
      </div>

      <div className="flex gap-8 items-center">
        {products.map((product: ProductType) => (
          <Product key={product.productId} product={product} />
        ))}
      </div>
    </div>
  )
}
