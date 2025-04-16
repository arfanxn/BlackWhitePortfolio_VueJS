export const isEven = (num: number): boolean => num % 2 === 0

export const areJsonObjectsEqual = <T>(a: T, b: T): boolean =>
  JSON.stringify(a) === JSON.stringify(b)

export const like = (pattern: string, value: string): boolean => {
  // Escape special regex characters in the pattern
  const escapedPattern = pattern.replace(/([.*+?^${}()|\[\]\\])/g, '\\$1')

  // Replace MySQL-like wildcards with regex equivalents
  const regexPattern = escapedPattern
    .replace(/%/g, '.*') // '%' becomes '.*'
    .replace(/_/g, '.') // '_' becomes '.'

  // Create a regex from the pattern
  const regex = new RegExp(`^${regexPattern}$`, 'i') // 'i' for case-insensitive matching

  // Test the value against the regex
  return regex.test(value)
}
