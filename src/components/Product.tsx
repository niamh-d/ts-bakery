import { ProductPropsType } from '../../types'
import { formatPrice } from '../../utils/string.utils'

export default function Product({ product }: { product: ProductPropsType }) {
  const { productName, img, price } = product
  return (
    <div>
      <h3 className="pb-4 font-semibold text-pink-600">{productName}</h3>
      <div className="rounded-lg overflow-hidden h-64">
        <img src={`/imgs/${img}`} alt={productName} className="w-full h-full object-cover" />
      </div>
      <p className="pt-2 font-medium">Price: {formatPrice(price)}/pc</p>
    </div>
  )
}
