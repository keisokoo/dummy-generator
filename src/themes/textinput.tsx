import React, {
  ChangeEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react'

import styles from './textinput.module.scss'
export interface TextInputTypeProps {
  index?: number
  refs?: React.MutableRefObject<any> | undefined | null
  defaultValue?: string | undefined
  onValueChange?: (value: string) => void
  onKeyDown?: KeyboardEventHandler<HTMLInputElement> | undefined
  inputType?: string
}
const TextInput = ({
  index,
  refs,
  onValueChange,
  defaultValue,
  onKeyDown,
  inputType,
}: TextInputTypeProps) => {
  const [value, setValue] = useState('' as string | undefined)
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (onValueChange) {
      onValueChange(event.target.value)
    }
  }
  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(defaultValue)
    }
    if (refs && refs.current && defaultValue === '') {
      refs.current.focus()
    }
  }, [defaultValue, refs])
  return (
    <div className={`${styles.wrap}`}>
      <input
        {...(refs && { ref: refs })}
        type={inputType ? inputType : `text`}
        value={value}
        onChange={handleChangeValue}
        {...(onKeyDown && { onKeyDown: (e) => onKeyDown(e) })}
      />
    </div>
  )
}
export default TextInput
