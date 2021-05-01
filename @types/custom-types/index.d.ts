declare module 'custom-types' {
  export namespace KeyValueWrap {
    interface List {
      key: string
      valueType: string
      custom?: string
    }
  }
  export namespace TextInputType {
    type Value = string
    interface Props {
      defaultValue?: string | undefined
      onValueChange: (value: string) => void
    }
  }
}
