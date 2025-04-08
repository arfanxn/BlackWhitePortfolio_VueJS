export const formatTimeRange = (left: Date, right: Date): string => {
  const now = new Date()
  const l = `${left.getMonth() + 1}/${left.getFullYear()}`
  const r = right > now ? `Present` : `${right.getMonth() + 1}/${right.getFullYear()}`

  return `${l} - ${r}`
}
