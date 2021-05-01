import React, { createRef, useState, useEffect } from 'react'
import { KeyValueWrap } from 'custom-types'
import Textinput from '../themes/textinput'
import { randomName } from '../utils/names'
import { randomNumber } from '../utils/phone'
import { randomAddress } from '../utils/address'
import { randomMail } from '../utils/email'
import { randomDate } from '../utils/lib'
import { format } from 'date-fns'

const initialKeyValue = [
  {
    name: 'name',
    valueType: 'name',
    refs: createRef(),
  },
  {
    name: 'phone',
    valueType: 'phone',
    refs: createRef(),
  },
  {
    name: 'address',
    valueType: 'address',
    refs: createRef(),
  },
  {
    name: 'email',
    valueType: 'email',
    refs: createRef(),
  },
  {
    name: 'date',
    valueType: 'date',
    refs: createRef(),
  },
] as Array<KeyValueWrap.List>
const Wrap = () => {
  const [keyValues, setKeyValues] = useState(initialKeyValue)

  const handleSetKey = (value: string, index: number): void => {
    setKeyValues((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], name: value },
      ...prev.slice(index + 1),
    ])
  }
  const handleKeyDownOnSelect = (event: any, index: number): void => {
    if (event.code.toLowerCase().includes('tab') && keyValues[index].name) {
      event.preventDefault()
      setKeyValues((prev) => [
        ...prev.slice(0, index),
        { ...prev[index] },
        {
          name: '',
          valueType: '',
          refs: createRef(),
        },
        ...prev.slice(index + 1),
      ])
    }
  }
  const handleKeyDown = (event: any, index: number): void => {
    if (event.code.toLowerCase().includes('enter') && event.target.value) {
      setKeyValues((prev) => [
        ...prev.slice(0, index),
        { ...prev[index] },
        {
          name: '',
          valueType: '',
          refs: createRef(),
        },
        ...prev.slice(index + 1),
      ])
    }
    if (
      event.code.toLowerCase().includes('backspace') &&
      !event.target.value &&
      keyValues.length > 1
    ) {
      setKeyValues((prev) => prev.filter((_, idx) => index !== idx))
    }
  }
  useEffect(() => {
    if (keyValues.findIndex((dt) => dt.name === '') > 0) {
      keyValues[
        keyValues.findIndex((dt) => dt.name === '')
      ].refs.current.focus()
    }
  }, [keyValues.length])
  return (
    <div>
      <div id="wrap">
        {keyValues &&
          keyValues.length > 0 &&
          keyValues.map((item, index) => (
            <div className="key-value-box" key={'keytype' + index}>
              <Textinput
                index={index}
                refs={item.refs}
                defaultValue={item.name}
                onValueChange={(value) => handleSetKey(value, index)}
                onKeyDown={handleKeyDown}
              />
              <select
                value={item.valueType}
                onChange={(e) => {
                  setKeyValues((prev) => [
                    ...prev.slice(0, index),
                    { ...prev[index], valueType: e.target.value },
                    ...prev.slice(index + 1),
                  ])
                }}
                onKeyDown={(e) => handleKeyDownOnSelect(e, index)}
              >
                <option>name</option>
                <option>phone</option>
                <option>email</option>
                <option>address</option>
                <option>date</option>
                <option>custom</option>
              </select>
            </div>
          ))}
      </div>
      <code>
        {'{'}
        {keyValues &&
          keyValues.length > 0 &&
          keyValues.map((item, index) => (
            <React.Fragment key={`code-${index}`}>
              <br />
              {`    "${item.name}": "${
                item.valueType === 'name' ? randomName() : ''
              }${item.valueType === 'phone' ? randomNumber() : ''}${
                item.valueType === 'address' ? randomAddress() : ''
              }${item.valueType === 'email' ? randomMail() : ''}${
                item.valueType === 'date'
                  ? format(
                      randomDate(new Date(2012, 0, 1), new Date()),
                      'yyyy-MM-dd'
                    )
                  : ''
              }"`}
              <br />
            </React.Fragment>
          ))}
        {'}'}
      </code>
    </div>
  )
}
export default Wrap
