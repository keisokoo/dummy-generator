import { randomRange } from './math'

function gcr() {
  var r = Math.floor(Math.random() * 26)
  return String.fromCharCode(65 + r)
}
const mails = [
  '@gmail.com',
  '@naver.com',
  '@daum.net',
  '@nate.com',
  '@apple.com',
  '@hotmail.com',
  '@microsoft.com',
  '@office.kr',
]
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
