import { convertKeysToCamel } from '../utils/string.utils'
import { BakeryDataType } from '../types'

class BakeryDataAPI {
  private static instance: BakeryDataAPI
  private url

  private constructor(url: string) {
    this.url = url
  }

  public static getInstance(url: string): BakeryDataAPI {
    if (!BakeryDataAPI.instance) {
      BakeryDataAPI.instance = new BakeryDataAPI(url)
    }
    return BakeryDataAPI.instance
  }

  public async getBakeryData(): Promise<BakeryDataType> {
    const response = await fetch(this.url)
    const data = await response.json()

    return {
      name: data.name,
      owners: data.owners,
      address: data.address,
      delivery: convertKeysToCamel(data.delivery),
      products: convertKeysToCamel(data.products),
    }
  }
}

export default BakeryDataAPI
