import { PricingPropsType, ProductType } from '../../types'
import { formatPrice } from '../../utils/string.utils'

export default function Pricing({ pricing, products, orderData }: PricingPropsType) {
  const { steamBunsQuantity, cookiesQuantity, creamPuffsQuantity, speedyDelivery } = orderData

  const numProducts = steamBunsQuantity + cookiesQuantity + creamPuffsQuantity

  if (!pricing || numProducts === 0) {
    return <p>Basket is empty.</p>
  }

  const steamBuns =
    products!.find((product: ProductType) => product.productId === 'P1')!.price * steamBunsQuantity
  const cookies =
    products!.find((product: ProductType) => product.productId === 'P2')!.price * cookiesQuantity
  const creamPuffs =
    products!.find((product: ProductType) => product.productId === 'P3')!.price * creamPuffsQuantity

  return (
    <div className="flex flex-col gap-5">
      {pricing.isFreeDelivery && <p>You qualify for FREE speedy delivery! 🎉</p>}
      <table className="table">
        <thead>
          <tr className="text-left">
            <th className="min-w-48">Item</th>
            <th className="min-w-48">Quantity</th>
            <th className="min-w-48">Price</th>
          </tr>
        </thead>
        <tbody>
          {products && steamBunsQuantity > 0 && (
            <tr>
              <td>Steam buns</td>
              <td>{steamBunsQuantity}</td>
              <td>{formatPrice(steamBuns)}</td>
            </tr>
          )}
          {products && cookiesQuantity > 0 && (
            <tr>
              <td>Cookies</td>
              <td>{cookiesQuantity}</td>
              <td>{formatPrice(cookies)}</td>
            </tr>
          )}
          {products && creamPuffsQuantity > 0 && (
            <tr>
              <td>Cream puffs</td>
              <td>{creamPuffsQuantity}</td>
              <td>{formatPrice(creamPuffs)}</td>
            </tr>
          )}
          {pricing.productsSubTotal !== pricing.productsTotal && (
            <tr>
              <td>Product cost</td>
              <td></td>
              <td>{formatPrice(pricing.productsSubTotal)}</td>
            </tr>
          )}
          {pricing.minOrderSurcharge > 0 && (
            <tr>
              <td>Minimum order surcharge</td>

              <td>1</td>
              <td>{formatPrice(pricing.minOrderSurcharge)}</td>
            </tr>
          )}
          <tr>
            <td>Product total</td>
            <td></td>
            <td>{formatPrice(pricing.productsTotal)}</td>
          </tr>
          {speedyDelivery && (
            <tr>
              <td>Speedy delivery</td>
              <td>1</td>
              <td>{formatPrice(pricing.speedyDeliverySurcharge)}</td>
            </tr>
          )}
          {!pricing.isFreeDelivery && (
            <tr>
              <td>Delivery cost</td>
              <td></td>
              <td>{formatPrice(pricing.deliveryCost)}</td>
            </tr>
          )}
          <tr>
            <td className="font-semibold">Order Total</td>
            <td></td>
            <td className="font-semibold">{formatPrice(pricing.totalOrder)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
