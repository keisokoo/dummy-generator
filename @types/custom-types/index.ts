export const ValueTypeList = [
  'id',
  'product',
  'brand',
  'code',
  'name',
  'phone',
  'split',
  'address',
  'email',
  'date',
  'title',
  'article',
  'custom',
  'index',
  'code',
] as const

export type ValueTypes = typeof ValueTypeList[number]

export const isValueTypes = (value: string): value is ValueTypes => {
  return value !== undefined && ValueTypeList.includes(value as ValueTypes)
}
