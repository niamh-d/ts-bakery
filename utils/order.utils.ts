import { CourierType } from '../types'
import { randInt } from './maths.utils'

export const randOrderNumber = (): boolean => {
  return String(randInt(10_000, 50_000)).padStart(6, '0')
}

export const selectCourier = (couriers: CourierType[], speedyDelivery: boolean): any => {
  let arr: CourierType[] = []
  if (speedyDelivery) {
    arr = couriers.filter((courier) => courier.speedyDelivery)
  } else {
    arr = couriers
  }
  return couriers[randInt(0, arr.length - 1)]
}
