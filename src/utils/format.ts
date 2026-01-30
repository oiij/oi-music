export function millionFormat(num: number) {
  if (num >= 100000000) {
    return `${(num / 100000000).toFixed(0)}亿`
  }
  else if (num >= 10000) {
    return `${(num / 10000).toFixed(0)}万`
  }
  else {
    return num.toString()
  }
}
export function dtFormat(dt: number) {
  const minutes = Math.floor(dt / 60000)
  const seconds = Number(((dt % 60000) / 1000).toFixed(0))
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
}
