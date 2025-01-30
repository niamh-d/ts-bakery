import BakeryDataAPI from '../../API/BakeryDataAPI'
import { API_URL } from '../../constants/constants'
import { BakeryDataType } from '../../types'

export async function getBakeryData(): Promise<BakeryDataType> {
  const api: BakeryDataAPI = BakeryDataAPI.getInstance(API_URL)
  const bakeryData = (await api.getBakeryData()) as BakeryDataType
  return bakeryData
}
