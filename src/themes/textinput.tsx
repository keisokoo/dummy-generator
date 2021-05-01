import React, { ChangeEvent, useEffect, useState } from 'react'
import styles from './textinput.module.scss'
import { TextInputType } from 'custom-types'

const TextInput = ({
  index,
  refs,
  onValueChange,
  defaultValue,
  onKeyDown,
}: TextInputType.Props) => {
  const [value, setValue] = useState('' as string | undefined)
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    if (onValueChange) {
      onValueChange(event.target.value)
    }
  }
  useEffect(() => {
    setValue(defaultValue)
    if (defaultValue === '') {
      refs.current.focus()
    }
  }, [defaultValue, refs])
  return (
    <div className={`${styles.wrap}`}>
      <input
        data-id={index}
        ref={refs}
        type="text"
        value={value}
        onChange={handleChangeValue}
        onKeyDown={(e) => onKeyDown(e, index)}
      />
    </div>
  )
}
export default TextInput
