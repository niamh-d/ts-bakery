import {
  BakeryDataType,
  DeliveryDataType,
  FormDataType,
  OrderPricingType,
  ProductType,
} from '../types'

export default class PricingCalculator {
  private static instance: PricingCalculator
  private readonly products: ProductType[]
  private readonly deliveryData: DeliveryDataType
  private isFreeDelivery: boolean = false

  private constructor(bakeryData: BakeryDataType) {
    this.products = bakeryData.products
    this.deliveryData = bakeryData.delivery
  }

  public static getInstance(bakeryData: BakeryDataType): PricingCalculator {
    if (!PricingCalculator.instance) {
      PricingCalculator.instance = new PricingCalculator(bakeryData)
    }
    return PricingCalculator.instance
  }

  private getPriceById(productId: string): number {
    return this.products.find((product: ProductType) => product.productId === productId)!.price
  }

  private calcProductsSubTotal(data: FormDataType): number {
    return (
      data.steamBunsQuantity * this.getPriceById('P1') +
      data.cookiesQuantity * this.getPriceById('P2') +
      data.creamPuffsQuantity * this.getPriceById('P3')
    )
  }

  private setIsFreeDelivery(subTotal: number): void {
    this.isFreeDelivery = subTotal >= this.deliveryData.freeDeliveryOrder
  }

  private calcMinSurcharge = (productsSubTotal: number): number => {
    const diff = this.deliveryData.minOrder - productsSubTotal
    return diff > 0 ? diff : 0
  }

  private calcDeliveryCost = (
    speedyDelivery: boolean,
  ): {
    newSpeedyDeliverySurcharge: number
    total: number
  } => {
    const newSurcharge = speedyDelivery ? this.deliveryData.speedySurcharge : 0
    return {
      newSpeedyDeliverySurcharge: newSurcharge,
      total: this.deliveryData.basePrice + newSurcharge,
    }
  }

  public calcPrices(formData: FormDataType): OrderPricingType {
    const productsSubTotal = this.calcProductsSubTotal(formData)
    this.setIsFreeDelivery(productsSubTotal)

    if (this.isFreeDelivery) {
      return {
        totalOrder: productsSubTotal,
        deliveryCost: 0,
        productsSubTotal,
        productsTotal: productsSubTotal,
        speedyDeliverySurcharge: 0,
        minOrderSurcharge: 0,
        isFreeDelivery: this.isFreeDelivery,
      }
    }

    const minOrderSurcharge = this.calcMinSurcharge(productsSubTotal)
    const productsTotal = productsSubTotal + minOrderSurcharge
    const deliveryCosts = this.calcDeliveryCost(formData.speedyDelivery)

    return {
      totalOrder: productsTotal + deliveryCosts.total,
      deliveryCost: deliveryCosts.total,
      productsSubTotal,
      productsTotal,
      speedyDeliverySurcharge: deliveryCosts.newSpeedyDeliverySurcharge,
      minOrderSurcharge,
      isFreeDelivery: this.isFreeDelivery,
    }
  }
}
