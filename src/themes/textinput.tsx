import React, { ChangeEvent } from 'react'
import styles from './textinput.module.scss'
import { TextInputType } from 'custom-types'

const TextInput = ({ onValueChange, defaultValue }: TextInputType.Props) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(event.target.value)
    }
  }
  return (
    <div className={`${styles.wrap}`}>
      <input
        type="text"
        defaultValue={defaultValue}
        onChange={handleChangeValue}
      />
    </div>
  )
}
export default TextInput
