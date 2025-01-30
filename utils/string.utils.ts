import { CourierType, ProductType, DeliveryDataType } from '../types'

type ConvertToCamelType =
  | DeliveryDataType
  | ProductType
  | CourierType
  | ProductType[]
  | CourierType[]
  | Map
interface Map {
  [key: string]: string | boolean | number | CourierType[]
}

const snakeToCamel = (str: string): string =>
  str.toLowerCase().replace(/[-_][a-z]/g, (group) => group[1].toUpperCase())

const isArray = function (arr: ConvertToCamelType): boolean {
  return Array.isArray(arr)
}

const isObject = function (obj: ConvertToCamelType): boolean {
  return obj === Object(obj) && !isArray(obj) && typeof obj !== 'function'
}

export const keysToCamel = function (obj: ConvertToCamelType): ConvertToCamelType {
  if (isObject(obj)) {
    const n = {} as ConvertToCamelType

    Object.keys(obj as Map).forEach((key: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      n[snakeToCamel(key) as keyof ConvertToCamelType] = keysToCamel(
        obj[key as keyof ConvertToCamelType],
      )
    })

    return n as ConvertToCamelType
  } else if (isArray(obj)) {
    return (obj as ProductType[] | CourierType[]).map((i: ProductType | CourierType) => {
      return keysToCamel(i)
    }) as ProductType[] | CourierType[]
  }

  return obj
}

export const formatPrice = (price: number): string => {
  return price.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'EUR',
  })
}
