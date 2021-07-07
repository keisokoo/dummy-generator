import {
  rand,
  address,
  middle,
  firstNames,
  lastNames,
  mails,
  numberRange,
  titles,
  articles,
  brands,
  prodname,
} from './data'

export function randomRange(arr: Array<any>) {
  return arr[Math.floor(Math.random() * arr.length)]
}
function gcr() {
  var r = Math.floor(Math.random() * 26)
  return String.fromCharCode(65 + r)
}
export function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

export const randomAddress = () => {
  const firstNum = randomRange(rand) + randomRange(rand) + randomRange(rand)
  const lastNum = randomRange(rand)
  return (
    randomRange(address) +
    ' ' +
    randomRange(middle) +
    ' ' +
    firstNum +
    (firstNum && lastNum ? '-' + lastNum : '')
  )
}

export function randomName() {
  return randomRange(firstNames) + randomRange(lastNames)
}
export function randomProducts() {
  return randomRange(prodname)
}
export function randomBrands() {
  return randomRange(brands)
}

export function randomMail() {
  return (
    (
      gcr() +
      gcr() +
      gcr() +
      gcr() +
      gcr() +
      gcr() +
      gcr() +
      gcr() +
      gcr() +
      gcr() +
      gcr()
    ).toLowerCase() + randomRange(mails)
  )
}
const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
export const randomCode = () => {
  return `${randomRange(randomChars)}${randomRange(numberRange)}${randomRange(
    numberRange
  )}${randomRange(numberRange)}${randomRange(numberRange)}`
}
export const randomNumber = () => {
  return `010-${randomRange(numberRange)}${randomRange(
    numberRange
  )}${randomRange(numberRange)}${randomRange(numberRange)}-${randomRange(
    numberRange
  )}${randomRange(numberRange)}${randomRange(numberRange)}${randomRange(
    numberRange
  )}`
}
export function randomTitle() {
  return randomRange(titles)
}
export function randomArticle() {
  return randomRange(articles)
}
