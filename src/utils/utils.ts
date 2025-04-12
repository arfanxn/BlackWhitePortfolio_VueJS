export const tap = <T>(value: T, fn: (value: T) => void): T => {
  fn(value)
  return value
}

