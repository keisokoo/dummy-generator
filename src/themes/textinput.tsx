import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './textinput.module.scss'
import { TextInputType } from 'custom-types'

const TextInput = ({
  index,
  refs,
  onValueChange,
  defaultValue,
  onKeyDown,
  inputType,
}: TextInputType.Props) => {
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
        {...(onKeyDown && { onKeyDown: (e) => onKeyDown(e, index) })}
      />
    </div>
  )
}
export default TextInput
