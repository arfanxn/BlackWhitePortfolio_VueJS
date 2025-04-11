export const formatTimeRange = (left: Date, right: Date): string => {
  const now = new Date()
  const l = `${left.getMonth() + 1}/${left.getFullYear()}`
  const r = right > now ? `Present` : `${right.getMonth() + 1}/${right.getFullYear()}`

  return `${l} - ${r}`
}

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
