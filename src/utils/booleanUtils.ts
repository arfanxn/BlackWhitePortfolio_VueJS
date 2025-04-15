export const isEven = (num: number): boolean => num % 2 === 0

export const areJsonObjectsEqual = <T>(a: T, b: T): boolean =>
  JSON.stringify(a) === JSON.stringify(b)
