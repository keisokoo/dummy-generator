import { randomRange } from './math'
const numberRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const randomNumber = () => {
  return `010-${randomRange(numberRange)}${randomRange(
    numberRange
  )}${randomRange(numberRange)}${randomRange(numberRange)}-${randomRange(
    numberRange
  )}${randomRange(numberRange)}${randomRange(numberRange)}${randomRange(
    numberRange
  )}`
}
