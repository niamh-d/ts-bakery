import { ButtonTexts, ButtonTypes } from '../constants/constants'

type BaseType = {
  img: string
}

type CourierType = BaseType & {
  courierId: string
  courierName: string
  speedyDelivery: boolean
}

type ProductType = BaseType & {
  productId: string
  productName: string
  price: number
}

type AddressType = {
  street: string
  city: string
}

type DeliveryDataType = {
  couriers: Courier[]
  basePrice: number
  speedySurcharge: number
  minOrder: number
  freeDeliveryOrder: number
}

type BakeryDataType = {
  name: string
  owners: string[]
  address: Address
  delivery: DeliveryDataType
  products: Product[]
}

type ProductPropsType = ProductType
type ProductsPropsType = {
  handler: (data: BakeryDataType) => void
}

type FormDataType = {
  steamBunsQuantity: number
  cookiesQuantity: number
  creamPuffsQuantity: number
  speedyDelivery: boolean
}

type FormPropsType = {
  changeFormHandler: (vals: FormDataType) => void
  submitOrderHandler: (order: FormDataType) => void
}

type OrderType = FormDataType & {
  orderId: string
  deliveryIsFree: boolean
  courier: CourierType
  totalOrder: number
}

type PricingPropsType = {
  pricing: OrderPricingType
  orderData: FormDataType
  products: ProductType[]
}

type OrderPricingType = {
  totalOrder: number
  productsTotal: number
  speedyDeliverySurcharge: number
  minOrderSurcharge: number
  productsSubTotal: number
  deliveryCost: number
  isFreeDelivery: boolean
}

type SuccessPropsType = {
  order: OrderType
  handler: () => void
}

type ButtonStyles =
  | 'btn btn-primary'
  | 'btn btn-secondary'
  | 'btn btn-info'
  | 'btn btn-warning'
  | 'btn btn-danger'
  | 'btn btn-success'
  | 'btn btn-outline-info'
  | 'btn btn-outline-warning'
  | 'btn btn-outline-danger'
  | 'btn btn-outline-success'
  | 'btn btn-disabled'

type ButtonPropsType = {
  text?: ButtonTexts
  handler?: () => void
  styles?: ButtonStyles
  type?: ButtonTypes
  isDisabled?: boolean
}

export {
  SuccessPropsType,
  OrderPricingType,
  CourierType,
  ProductType,
  AddressType,
  DeliveryDataType,
  BakeryDataType,
  FormDataType,
  ProductPropsType,
  ProductsPropsType,
  PricingPropsType,
  FormPropsType,
  OrderType,
  ButtonPropsType,
}
