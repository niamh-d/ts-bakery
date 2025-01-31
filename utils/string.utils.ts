type AnyObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}
type CaseConverter = (str: string) => string

const snakeToCamelCase: CaseConverter = (str: string): string =>
  str.replace(/([-_][a-z])/g, (group) => group.toUpperCase().replace('-', '').replace('_', ''))

const convertKeysCasing =
  <R extends AnyObject>(caseConverter: CaseConverter) =>
  (obj: AnyObject | AnyObject[]): R => {
    if (Array.isArray(obj))
      return obj.map((item) =>
        typeof item === 'object' ? convertKeysCasing<R>(caseConverter)(item) : item,
      ) as unknown as R

    return Object.entries(obj).reduce((converted: AnyObject, [key, value]) => {
      const convertedKey = caseConverter(key)
      converted[convertedKey] =
        value && typeof value === 'object'
          ? Array.isArray(value)
            ? value.map((item) =>
                typeof item === 'object' ? convertKeysCasing(caseConverter)(item) : item,
              )
            : convertKeysCasing(caseConverter)(value)
          : value

      return converted
    }, {}) as R
  }

export const convertKeysToCamel = <R extends AnyObject>(obj: AnyObject | AnyObject[]): R =>
  convertKeysCasing<R>(snakeToCamelCase)(obj)

export const formatPrice = (price: number): string => {
  return price.toLocaleString('en-GB', {
    style: 'currency',
    currency: 'EUR',
  })
}
