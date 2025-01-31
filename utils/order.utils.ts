import { CourierType } from '../types'
import { randInt } from './maths.utils'

export const randOrderNumber = (): string => {
  return String(randInt(10_000, 50_000)).padStart(6, '0')
}

export const selectCourier = (couriers: CourierType[], speedyDelivery: boolean): CourierType => {
  let arr: CourierType[] = []
  if (speedyDelivery) {
    arr = couriers.filter((courier) => courier.speedyDelivery)
  } else {
    arr = couriers
  }
  return arr[randInt(0, arr.length - 1)]!
}
