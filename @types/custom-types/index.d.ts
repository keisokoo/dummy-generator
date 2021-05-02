declare module 'custom-types' {
  export namespace KeyValueWrap {
    interface List {
      name: string
      valueType: string
      refs: React.MutableRefObject | undefined | null
      custom: string
      wrapType: boolean
    }
  }
  export namespace TextInputType {
    type Value = string
    interface Props {
      index?: number
      refs?: React.MutableRefObject | undefined | null
      defaultValue?: string | undefined
      onValueChange?: (value: string) => void
      onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined
      inputType?: string
    }
  }
}
