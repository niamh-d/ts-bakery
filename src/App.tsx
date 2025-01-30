import { useState } from 'react'
import Form from './components/Form'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Success from './components/Success'
import { randOrderNumber, selectCourier } from '../utils/order.utils'
import { BakeryDataType, FormDataType, OrderPricingType } from '../types'
import { orderDefaultValues } from '../constants/constants'
import PricingCalculator from '../PricingCalculator/PricingCalculator'

export default function App() {
  const [order, setOrder] = useState(orderDefaultValues)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [data, setData] = useState(null as BakeryDataType | null)
  const [formData, setFormData] = useState(null as FormDataType | null)
  const [pricingData, setPricingData] = useState(null as OrderPricingType | null)

  const changeFormHandler = (vals: FormDataType): void => {
    const calculator: PricingCalculator = PricingCalculator.getInstance(data!)
    const pricing = calculator.calcPrices(vals)
    setPricingData(pricing)
    setFormData({
      ...vals,
      speedyDelivery: vals.speedyDelivery || pricing.isFreeDelivery,
    })
  }
  const submitOrderHandler = (order: FormDataType): void => {
    setOrder({
      ...order,
      orderId: randOrderNumber(),
      speedyDelivery: order.speedyDelivery || pricingData!.isFreeDelivery,
      deliveryIsFree: pricingData!.isFreeDelivery,
      totalOrder: pricingData!.totalOrder,
      courier: selectCourier(
        data!.delivery.couriers,
        pricingData!.isFreeDelivery || order.speedyDelivery,
      ),
    })
    setOrderPlaced(true)
  }
  const dismissHandler = (): void => {
    setOrderPlaced(false)
    setPricingData(null)
    setFormData(null)
    setOrder(orderDefaultValues)
  }
  const handleData = (data: BakeryDataType): void => {
    setData(data)
  }

  return (
    <>
      <div className="flex gap-10 items-center">
        <div>
          <h1 className="pb-2">
            Welcome to <span className="font-semibold tracking-wider">Gütiokipänjä Bakery</span>!
          </h1>
          <p className="text-lg">The best bakery in all of Koriko!</p>
        </div>
        <div>
          <img src="/imgs/bakery.png" alt="bakery" className="w-32 h-32 rounded-full" />
        </div>
      </div>
      {orderPlaced && <Success order={order} handler={dismissHandler} />}
      {!orderPlaced && (
        <>
          <Products handler={handleData} />
          <div className="px-20 py-10">
            <div className="flex gap-20 items-start">
              <div className="flex flex-col gap-2">
                <h2 className="pb-5">Order</h2>
                <Form
                  changeFormHandler={changeFormHandler}
                  submitOrderHandler={submitOrderHandler}
                />
              </div>
              <div>
                <h2 className="pb-5">Pricing</h2>
                {pricingData && (
                  <Pricing pricing={pricingData} orderData={formData!} products={data!.products} />
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
