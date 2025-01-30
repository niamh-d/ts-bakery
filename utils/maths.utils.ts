export const randInt = (min: string, max: number): void => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
