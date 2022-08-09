import { v4 as uuidv4 } from 'uuid'
import { ValueTypes } from '../../@types/custom-types'
import {
  address,
  articles,
  brands,
  firstNames,
  lastNames,
  mails,
  middle,
  numberRange,
  prodname,
  rand,
  titles,
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
  return randomRange(articles).replaceAll('"', '')
}

export const extractByType = {
  id: uuidv4,
  product: randomProducts,
  brand: randomBrands,
  code: randomCode,
  name: randomName,
  phone: randomNumber,
  split: (custom?: string) => {
    return custom
      ? custom.includes('|')
        ? randomRange(custom.split('|'))
        : custom
      : ''
  },
  address: randomAddress,
  email: randomMail,
  date: () => randomDate(new Date(2020, 0, 1), new Date()).getTime(),
  title: randomTitle,
  article: randomArticle,
  custom: (custom: string) => custom,
  index: (num: number) => Number(num),
} as { [key in ValueTypes]: (value?: string | number) => string | number }

export const disposeByType = (keyName: ValueTypes, value?: string | number) => {
  return extractByType[keyName](value)
}
