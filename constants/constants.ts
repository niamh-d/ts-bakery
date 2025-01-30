import { FormDataType, OrderType } from '../types'

export const API_URL = 'http://localhost:3001/data'

export const formDefaultValues: FormDataType = {
  steamBunsQuantity: 0,
  cookiesQuantity: 0,
  creamPuffsQuantity: 0,
  speedyDelivery: false,
}

export const orderDefaultValues: OrderType = {
  ...formDefaultValues,
  orderId: '',
  deliveryIsFree: false,
  courier: {
    courierId: '',
    courierName: '',
    speedyDelivery: false,
    img: '',
  },
  totalOrder: 0,
}

export enum ButtonTypes {}

export enum ButtonTexts {}
