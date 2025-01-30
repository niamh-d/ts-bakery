import Button from './Button'
import { SuccessPropsType } from '../../types'
import { formatPrice } from '../../utils/string.utils'
import { ButtonTexts, ButtonTypes } from '../../constants/constants'

export default function Success({ order, handler }: SuccessPropsType) {
  return (
    <div className="flex flex-col items-center justify-center p-20 gap-6">
      <div className="flex flex-col gap-5 items-center">
        <div>
          <h1>ありがとう ございます!</h1>
          <p className="pt-2 font-medium italic">Thank you!</p>
        </div>
        <p className="text-xl">Your order has been placed!</p>
      </div>
      <p>
        Your order number is <span className="font-semibold">{order.orderId}</span>. Please note
        this for your records.
      </p>
      <p>
        Your total was <span className="font-semibold">{formatPrice(order.totalOrder)}</span>{' '}
        inclusive of {order.deliveryIsFree ? 'FREE' : null} {order.speedyDelivery ? 'SPEEDY' : null}{' '}
        delivery.
      </p>
      <div className="flex gap-5 items-center">
        <p>Your order today will be delivered by:</p>
        <div className="flex flex-col gap-2 items-center">
          <img
            src={`/imgs/${order.courier.img}`}
            alt={order.courier.courierName}
            className="w-24 h-24 rounded-full"
          />
          <span className="font-semibold">{order.courier.courierName}</span>
        </div>
      </div>
      <Button text={ButtonTexts.HOME} handler={handler} type={ButtonTypes.BUTTON} />
    </div>
  )
}
